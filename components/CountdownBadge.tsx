import { cn } from "@/lib/utils";
import { daysUntil } from "@/lib/utils";

export default function CountdownBadge({ deadline }: { deadline: string }) {
  const days = daysUntil(deadline);
  const color = days <= 7 ? "text-danger bg-danger/10" : days <= 14 ? "text-warning bg-warning/10" : "text-success bg-success/10";

  return (
    <span className={cn("text-xs font-medium px-2 py-0.5 rounded-full", color)}>
      {days <= 0 ? `${Math.abs(days)} dana kasni` : `za ${days} dana`}
    </span>
  );
}
