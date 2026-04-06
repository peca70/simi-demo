import { cn } from "@/lib/utils";
import { ProcurementStatus, STATUS_LABELS } from "@/lib/types";

const statusStyles: Record<ProcurementStatus, string> = {
  kasni: "bg-danger/15 text-danger border-danger/20",
  naruceno: "bg-info/15 text-info border-info/20",
  ceka: "bg-warning/15 text-warning border-warning/20",
  stiglo: "bg-success/15 text-success border-success/20",
  u_izradi: "bg-fabricated/15 text-fabricated border-fabricated/20",
};

export default function StatusBadge({ status }: { status: ProcurementStatus }) {
  return (
    <span className={cn("inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border", statusStyles[status])}>
      {STATUS_LABELS[status]}
    </span>
  );
}
