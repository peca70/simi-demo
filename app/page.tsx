"use client";

import { Brain, FolderKanban, AlertTriangle, Truck, Calendar, Clock, Package } from "lucide-react";
import StatCard from "@/components/StatCard";
import AiInsightCard from "@/components/AiInsightCard";
import PhaseBar from "@/components/PhaseBar";
import CountdownBadge from "@/components/CountdownBadge";
import { aiInsights } from "@/lib/data/ai-insights";
import { projects } from "@/lib/data/projects";
import { procurementItems } from "@/lib/data/procurement";
import { formatDate } from "@/lib/utils";

const lateItems = procurementItems.filter((p) => p.status === "kasni");
const criticalInsights = aiInsights.filter((i) => i.priority === "critical" || i.priority === "high");

const activities = [
  { time: "09:15", text: "Profil UNP18 stigao od Profil Čelik", type: "success" as const },
  { time: "08:45", text: "AI: 12 pozicija za zatvarače nije naručeno", type: "warning" as const },
  { time: "08:30", text: "BSA 30 LS - faza peskarenja završena 75%", type: "info" as const },
  { time: "08:00", text: "Dnevni izveštaj generisan", type: "info" as const },
  { time: "Juče", text: "Naručeni limovi za KABINU BSA 30", type: "info" as const },
  { time: "Juče", text: "GUMINS - kasni isporuka gumenih profila", type: "danger" as const },
  { time: "04.04.", text: "MSA 1500 - sklapanje započeto", type: "success" as const },
];

const typeColors = { success: "bg-success", warning: "bg-warning", info: "bg-info", danger: "bg-danger" };

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* AI Hero Section */}
      <div className="bg-gradient-to-r from-simi-dim/80 to-surface-raised border border-simi/15 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="relative">
            <Brain size={20} className="text-simi" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-success rounded-full animate-pulse-slow" />
          </div>
          <h2 className="text-lg font-semibold text-text-primary">AI Komandni centar</h2>
          <span className="text-xs text-text-muted ml-2">{criticalInsights.length} odluka čeka</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {criticalInsights.map((insight) => (
            <AiInsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard
          label="Aktivni projekti"
          value={projects.length}
          sub={`${projects.filter((p) => p.status === "u_roku").length} u roku, ${projects.filter((p) => p.status === "kasni").length} kasni`}
          icon={FolderKanban}
          color="simi"
        />
        <StatCard
          label="Delovi koji kasne"
          value={lateItems.length}
          sub="od ukupno 1.330 pozicija"
          icon={AlertTriangle}
          color="danger"
        />
        <StatCard
          label="Nabavke na čekanju"
          value={procurementItems.filter((p) => p.status === "ceka").length}
          sub="čeka narudžbu"
          icon={Truck}
          color="warning"
        />
        <StatCard
          label="Sledeća isporuka"
          value="12 dana"
          sub="BSA 15 - Plovdiv, Bugarska"
          icon={Calendar}
          color="info"
        />
      </div>

      {/* Project Cards Grid */}
      <div>
        <h3 className="text-sm font-medium text-text-secondary mb-3 uppercase tracking-wider">Aktivni projekti</h3>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {projects.map((project) => {
            const orderedPct = Math.round((project.orderedParts / project.totalParts) * 100);
            const receivedPct = Math.round((project.receivedParts / project.totalParts) * 100);
            return (
              <div
                key={project.id}
                className={`bg-surface-raised border rounded-xl p-5 hover:border-border-light transition-colors ${
                  project.status === "kasni" ? "border-danger/30" : project.status === "upozorenje" ? "border-warning/30" : "border-border"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">{project.name}</h4>
                    <p className="text-xs text-text-muted">{project.client} - {project.location}</p>
                  </div>
                  <CountdownBadge deadline={project.deadline} />
                </div>
                <PhaseBar currentPhase={project.currentPhase} progress={project.phaseProgress} />
                <div className="flex items-center gap-4 mt-3 text-xs text-text-secondary">
                  <span className="flex items-center gap-1">
                    <Package size={12} />
                    {project.totalParts} delova
                  </span>
                  <span>Naručeno: <span className="text-info font-medium">{orderedPct}%</span></span>
                  <span>Stiglo: <span className="text-success font-medium">{receivedPct}%</span></span>
                  <span className="text-text-muted">Rok: {formatDate(project.deadline)}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Two-column bottom */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-surface-raised border border-border rounded-xl p-5">
          <h3 className="text-sm font-medium text-danger mb-3 flex items-center gap-2">
            <AlertTriangle size={14} />
            Kritične stavke - kasni isporuka
          </h3>
          <div className="space-y-2">
            {lateItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div>
                  <p className="text-xs text-text-primary font-medium">{item.partName}</p>
                  <p className="text-[10px] text-text-muted">{item.partNumber} - {item.supplier}</p>
                </div>
                <span className="text-xs font-medium text-danger bg-danger/10 px-2 py-0.5 rounded-full">
                  {item.daysLate} dana
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-raised border border-border rounded-xl p-5">
          <h3 className="text-sm font-medium text-text-secondary mb-3 flex items-center gap-2">
            <Clock size={14} />
            Skorašnje aktivnosti
          </h3>
          <div className="space-y-3">
            {activities.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[10px] text-text-muted w-10 shrink-0 pt-0.5">{a.time}</span>
                <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${typeColors[a.type]}`} />
                <p className="text-xs text-text-secondary">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
