"use client";

import { projects } from "@/lib/data/projects";
import { PHASE_ORDER, PHASE_LABELS, ProjectPhase } from "@/lib/types";
import CountdownBadge from "@/components/CountdownBadge";
import { cn } from "@/lib/utils";

const phaseColors: Record<ProjectPhase, string> = {
  dokumentacija: "bg-text-muted/80",
  nabavka: "bg-info",
  kooperacija: "bg-purple-500",
  secenje_varenje: "bg-orange-500",
  peskarenje_farbanje: "bg-yellow-500",
  sklapanje: "bg-success",
  elektrifikacija: "bg-cyan-400",
  isporuka: "bg-gold",
};

const statusBorder = {
  u_roku: "border-l-success",
  upozorenje: "border-l-warning",
  kasni: "border-l-danger",
};

export default function ProjektiPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-text-primary">Aktivni projekti</h1>
        <p className="text-sm text-text-muted mt-1">Proizvodni ciklus - sve mašine u jednom pregledu</p>
      </div>

      {/* Phase column headers */}
      <div className="grid grid-cols-[220px_repeat(8,1fr)] gap-1">
        <div />
        {PHASE_ORDER.map((phase) => (
          <div key={phase} className="text-center">
            <span className="text-[10px] text-text-muted uppercase tracking-wider">{PHASE_LABELS[phase]}</span>
          </div>
        ))}
      </div>

      {/* Swimlanes */}
      <div className="space-y-3">
        {projects.map((project) => {
          const currentIdx = PHASE_ORDER.indexOf(project.currentPhase);
          return (
            <div
              key={project.id}
              className={cn(
                "grid grid-cols-[220px_repeat(8,1fr)] gap-1 bg-surface-raised border border-border rounded-xl p-3 hover:border-border-light transition-colors border-l-4",
                statusBorder[project.status]
              )}
            >
              {/* Project info */}
              <div className="pr-3">
                <h3 className="text-sm font-semibold text-text-primary leading-tight">{project.name}</h3>
                <p className="text-[11px] text-text-muted mt-0.5">{project.client}</p>
                <p className="text-[10px] text-text-muted">{project.location}</p>
                <div className="mt-2">
                  <CountdownBadge deadline={project.deadline} />
                </div>
              </div>

              {/* Phase cells */}
              {PHASE_ORDER.map((phase, idx) => {
                const isCurrent = idx === currentIdx;
                const isCompleted = idx < currentIdx;
                const isFuture = idx > currentIdx;

                return (
                  <div key={phase} className="flex items-center justify-center">
                    <div
                      className={cn(
                        "w-full h-12 rounded-lg flex items-center justify-center text-[10px] font-medium transition-all",
                        isCompleted && cn(phaseColors[phase], "text-white/90"),
                        isCurrent && cn("border-2 border-dashed", phaseColors[phase].replace("bg-", "border-"), "animate-pulse-slow"),
                        isFuture && "bg-border/30"
                      )}
                    >
                      {isCurrent && (
                        <div className="text-center">
                          <div className={cn("text-xs font-bold", phaseColors[phase].replace("bg-", "text-"))}>
                            {project.phaseProgress}%
                          </div>
                        </div>
                      )}
                      {isCompleted && "✓"}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 text-xs text-text-muted">
        <span>Legenda:</span>
        {PHASE_ORDER.map((phase) => (
          <span key={phase} className="flex items-center gap-1.5">
            <span className={cn("w-3 h-3 rounded-sm", phaseColors[phase])} />
            {PHASE_LABELS[phase]}
          </span>
        ))}
      </div>
    </div>
  );
}
