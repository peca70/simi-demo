"use client";

import { Wrench, Calendar, User, AlertCircle } from "lucide-react";
import { serviceOrders } from "@/lib/data/service";
import { ServiceStatus } from "@/lib/types";
import { cn, formatDate } from "@/lib/utils";

const columns: { key: ServiceStatus; label: string; color: string }[] = [
  { key: "zakazano", label: "Zakazano", color: "border-t-warning" },
  { key: "u_toku", label: "U toku", color: "border-t-info" },
  { key: "zavrseno", label: "Završeno", color: "border-t-success" },
];

const priorityStyles = {
  hitno: "bg-danger/15 text-danger border-danger/20",
  normalno: "bg-info/15 text-info border-info/20",
  nisko: "bg-text-muted/15 text-text-muted border-text-muted/20",
};

export default function ServisPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-text-primary">Servisni nalozi</h1>
        <p className="text-sm text-text-muted mt-1">Održavanje i servisiranje isporučenih mašina</p>
      </div>

      <div className="grid grid-cols-3 gap-4 h-[calc(100vh-160px)]">
        {columns.map((col) => {
          const items = serviceOrders.filter((o) => o.status === col.key);
          return (
            <div key={col.key} className={cn("bg-surface-raised border border-border rounded-xl overflow-hidden border-t-4", col.color)}>
              <div className="p-4 border-b border-border">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-text-primary">{col.label}</h3>
                  <span className="text-xs bg-surface-hover px-2 py-0.5 rounded-full text-text-muted">{items.length}</span>
                </div>
              </div>
              <div className="p-3 space-y-3 overflow-y-auto">
                {items.map((order) => (
                  <div key={order.id} className="bg-surface border border-border rounded-lg p-4 hover:border-border-light transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <span className={cn("text-[10px] px-2 py-0.5 rounded-full border font-medium", priorityStyles[order.priority])}>
                        {order.priority === "hitno" ? "Hitno" : order.priority === "normalno" ? "Normalno" : "Nisko"}
                      </span>
                      <span className="text-[10px] text-text-muted">{order.id}</span>
                    </div>
                    <h4 className="text-sm font-medium text-text-primary mb-1">{order.client}</h4>
                    <p className="text-[11px] text-text-secondary mb-2">{order.machine}</p>
                    <div className="flex items-start gap-1.5 mb-3">
                      <AlertCircle size={12} className="text-text-muted shrink-0 mt-0.5" />
                      <p className="text-xs text-text-muted leading-relaxed">{order.issue}</p>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-text-muted pt-2 border-t border-border">
                      <span className="flex items-center gap-1">
                        <User size={10} />
                        {order.technician}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={10} />
                        {formatDate(order.scheduledDate)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
