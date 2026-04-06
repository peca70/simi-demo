import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  sub?: string;
  icon: LucideIcon;
  color?: "simi" | "danger" | "warning" | "success" | "info";
}

const colorMap = {
  simi: { bg: "bg-simi/10", text: "text-simi", icon: "text-simi" },
  danger: { bg: "bg-danger/10", text: "text-danger", icon: "text-danger" },
  warning: { bg: "bg-warning/10", text: "text-warning", icon: "text-warning" },
  success: { bg: "bg-success/10", text: "text-success", icon: "text-success" },
  info: { bg: "bg-info/10", text: "text-info", icon: "text-info" },
};

export default function StatCard({ label, value, sub, icon: Icon, color = "simi" }: StatCardProps) {
  const c = colorMap[color];
  return (
    <div className="bg-surface-raised border border-border rounded-xl p-5 hover:border-border-light transition-colors">
      <div className="flex items-start justify-between mb-3">
        <span className="text-text-secondary text-xs font-medium uppercase tracking-wider">{label}</span>
        <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", c.bg)}>
          <Icon size={16} className={c.icon} />
        </div>
      </div>
      <p className={cn("text-3xl font-bold tracking-tight", c.text)}>{value}</p>
      {sub && <p className="text-text-muted text-xs mt-1">{sub}</p>}
    </div>
  );
}
