import { cn } from "@/lib/utils";
import { ProjectPhase, PHASE_ORDER, PHASE_LABELS } from "@/lib/types";

interface PhaseBarProps {
  currentPhase: ProjectPhase;
  progress: number;
  compact?: boolean;
}

const phaseColors: Record<ProjectPhase, string> = {
  dokumentacija: "bg-text-muted",
  nabavka: "bg-info",
  kooperacija: "bg-purple-500",
  secenje_varenje: "bg-orange-500",
  peskarenje_farbanje: "bg-yellow-500",
  sklapanje: "bg-success",
  elektrifikacija: "bg-cyan-400",
  isporuka: "bg-gold",
};

export default function PhaseBar({ currentPhase, progress, compact = false }: PhaseBarProps) {
  const currentIdx = PHASE_ORDER.indexOf(currentPhase);

  return (
    <div className="flex gap-0.5">
      {PHASE_ORDER.map((phase, idx) => {
        const isCurrent = idx === currentIdx;
        const isCompleted = idx < currentIdx;
        const isFuture = idx > currentIdx;

        return (
          <div key={phase} className="flex-1 group relative">
            <div
              className={cn(
                "rounded-sm transition-all",
                compact ? "h-2" : "h-3",
                isCurrent && "animate-pulse-slow",
                isCompleted ? phaseColors[phase] : isFuture ? "bg-border" : "bg-border"
              )}
            >
              {isCurrent && (
                <div
                  className={cn("h-full rounded-sm", phaseColors[phase])}
                  style={{ width: `${progress}%` }}
                />
              )}
            </div>
            {!compact && (
              <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block z-10">
                <span className="text-[10px] bg-surface-raised border border-border px-2 py-1 rounded whitespace-nowrap text-text-secondary">
                  {PHASE_LABELS[phase]}
                  {isCurrent && ` (${progress}%)`}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
