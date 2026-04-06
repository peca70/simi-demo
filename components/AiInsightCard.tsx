"use client";

import { useState } from "react";
import { Brain, AlertTriangle, Clock, Truck, Zap, TrendingUp, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AiInsight } from "@/lib/types";

const typeIcons = {
  nabavka: Truck,
  rok: Clock,
  kooperacija: AlertTriangle,
  optimizacija: Zap,
  pattern: TrendingUp,
};

const priorityColors = {
  critical: "border-danger/30 bg-danger/5",
  high: "border-warning/30 bg-warning/5",
  medium: "border-info/30 bg-info/5",
};

export default function AiInsightCard({ insight }: { insight: AiInsight }) {
  const [dismissed, setDismissed] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const Icon = typeIcons[insight.type];

  if (dismissed) return null;

  return (
    <div className={cn(
      "rounded-xl border p-4 min-w-[340px] max-w-[400px] shrink-0 transition-all",
      accepted ? "border-success/30 bg-success/5" : priorityColors[insight.priority]
    )}>
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-simi/15 flex items-center justify-center shrink-0 mt-0.5">
          {accepted ? <Check size={16} className="text-success" /> : <Icon size={16} className="text-simi" />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Brain size={12} className="text-simi" />
            <span className="text-[10px] text-text-muted uppercase tracking-wider">AI Asistent</span>
            <span className="text-[10px] text-text-muted">- {insight.confidence}%</span>
          </div>
          <h3 className="text-sm font-medium text-text-primary leading-tight mb-1.5">{insight.title}</h3>
          <p className="text-xs text-text-secondary leading-relaxed">{insight.description}</p>
          {insight.projectName && (
            <span className="inline-block mt-2 text-[10px] bg-surface-hover px-2 py-0.5 rounded text-text-muted">
              {insight.projectName}
            </span>
          )}
        </div>
      </div>
      {!accepted && (
        <div className="flex gap-2 mt-3 ml-11">
          <button
            onClick={() => setAccepted(true)}
            className="px-3 py-1.5 text-xs font-medium bg-simi/20 text-simi rounded-lg hover:bg-simi/30 transition-colors"
          >
            Prihvati
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="px-3 py-1.5 text-xs font-medium bg-surface-hover text-text-muted rounded-lg hover:text-text-secondary transition-colors"
          >
            Odbaci
          </button>
        </div>
      )}
    </div>
  );
}
