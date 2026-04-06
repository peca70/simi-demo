"use client";

import { useState } from "react";
import { Truck, AlertTriangle, Clock, CheckCircle, Package } from "lucide-react";
import { procurementItems } from "@/lib/data/procurement";
import { aiInsights } from "@/lib/data/ai-insights";
import AiInsightCard from "@/components/AiInsightCard";
import { ProcurementStatus } from "@/lib/types";
import { cn, formatRsd } from "@/lib/utils";

const statusGroups: { key: ProcurementStatus; label: string; icon: typeof AlertTriangle; color: string; headerBg: string }[] = [
  { key: "kasni", label: "Kasni", icon: AlertTriangle, color: "text-danger", headerBg: "bg-danger/10 border-danger/20" },
  { key: "naruceno", label: "Naručeno", icon: Clock, color: "text-info", headerBg: "bg-info/10 border-info/20" },
  { key: "ceka", label: "Čeka narudžbu", icon: Package, color: "text-warning", headerBg: "bg-warning/10 border-warning/20" },
  { key: "stiglo", label: "Stiglo", icon: CheckCircle, color: "text-success", headerBg: "bg-success/10 border-success/20" },
];

const nabavkaInsights = aiInsights.filter((i) => i.type === "nabavka" || i.type === "optimizacija");

export default function NabavkaPage() {
  const [filter, setFilter] = useState<ProcurementStatus | "sve">("sve");

  const filtered = filter === "sve" ? procurementItems : procurementItems.filter((p) => p.status === filter);
  const totalValue = procurementItems.reduce((sum, p) => sum + (p.priceRsd || 0) * p.quantity, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-bold text-text-primary">Nabavka i isporuke</h1>
          <p className="text-sm text-text-muted mt-1">
            {procurementItems.length} narudžbina - {procurementItems.filter((p) => p.status === "kasni").length} kasni - ukupno {formatRsd(totalValue)}
          </p>
        </div>
      </div>

      {/* Filter toggles */}
      <div className="flex gap-2">
        <button
          onClick={() => setFilter("sve")}
          className={cn(
            "px-3 py-1.5 text-xs rounded-lg border transition-colors",
            filter === "sve" ? "bg-simi/15 border-simi/30 text-simi" : "border-border text-text-muted hover:text-text-secondary"
          )}
        >
          Sve ({procurementItems.length})
        </button>
        {statusGroups.map((sg) => {
          const count = procurementItems.filter((p) => p.status === sg.key).length;
          return (
            <button
              key={sg.key}
              onClick={() => setFilter(sg.key)}
              className={cn(
                "px-3 py-1.5 text-xs rounded-lg border transition-colors flex items-center gap-1.5",
                filter === sg.key ? `${sg.headerBg} ${sg.color}` : "border-border text-text-muted hover:text-text-secondary"
              )}
            >
              <sg.icon size={12} />
              {sg.label} ({count})
            </button>
          );
        })}
      </div>

      {/* AI Insights for procurement */}
      {filter === "sve" && nabavkaInsights.length > 0 && (
        <div className="flex gap-4 overflow-x-auto pb-2">
          {nabavkaInsights.map((insight) => (
            <AiInsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      )}

      {/* Status-grouped cards */}
      {statusGroups
        .filter((sg) => filter === "sve" || filter === sg.key)
        .map((sg) => {
          const items = filtered.filter((p) => p.status === sg.key);
          if (items.length === 0) return null;
          const Icon = sg.icon;

          return (
            <div key={sg.key}>
              <div className={cn("flex items-center gap-2 px-3 py-2 rounded-lg border mb-3", sg.headerBg)}>
                <Icon size={14} className={sg.color} />
                <span className={cn("text-sm font-medium", sg.color)}>{sg.label}</span>
                <span className="text-xs text-text-muted">({items.length})</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-surface-raised border border-border rounded-lg p-4 hover:border-border-light transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-mono text-[10px] text-text-muted">{item.partNumber}</span>
                      {item.daysLate && (
                        <span className="text-xs font-medium text-danger bg-danger/10 px-2 py-0.5 rounded-full">
                          {item.daysLate} dana kasni
                        </span>
                      )}
                      {item.daysUntil && (
                        <span className="text-xs font-medium text-info bg-info/10 px-2 py-0.5 rounded-full">
                          za {item.daysUntil} dana
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-medium text-text-primary mb-1">{item.partName}</h4>
                    <div className="flex items-center gap-3 text-[10px] text-text-muted mt-2">
                      <span>Dobavljač: <span className="text-text-secondary">{item.supplier}</span></span>
                      <span>Kol: {item.quantity}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[10px] bg-surface-hover px-2 py-0.5 rounded text-text-muted">{item.projectName}</span>
                      {item.priceRsd && (
                        <span className="text-[10px] text-text-muted">{formatRsd(item.priceRsd * item.quantity)}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
}
