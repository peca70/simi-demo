"use client";

import { Building2, Phone, MapPin, Clock, TrendingUp, Package } from "lucide-react";
import { suppliers } from "@/lib/data/suppliers";
import { cn } from "@/lib/utils";

function ReliabilityRing({ score }: { score: number }) {
  const circumference = 2 * Math.PI * 20;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 90 ? "#10B981" : score >= 75 ? "#F59E0B" : "#EF4444";

  return (
    <div className="relative w-14 h-14">
      <svg className="w-14 h-14 -rotate-90" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="3" className="text-border" />
        <circle
          cx="24" cy="24" r="20" fill="none"
          stroke={color} strokeWidth="3" strokeLinecap="round"
          strokeDasharray={circumference} strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold text-text-primary">{score}%</span>
      </div>
    </div>
  );
}

export default function DobavljaciPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-text-primary">Dobavljači</h1>
        <p className="text-sm text-text-muted mt-1">{suppliers.length} aktivnih dobavljača</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {suppliers.map((supplier) => (
          <div
            key={supplier.id}
            className="bg-surface-raised border border-border rounded-xl p-5 hover:border-border-light transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold text-text-primary">{supplier.name}</h3>
                <span className="text-[10px] bg-surface-hover px-2 py-0.5 rounded text-text-muted mt-1 inline-block">
                  {supplier.category}
                </span>
              </div>
              <ReliabilityRing score={supplier.reliabilityScore} />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-surface rounded-lg p-2.5">
                <div className="flex items-center gap-1.5 text-text-muted mb-1">
                  <Clock size={10} />
                  <span className="text-[10px]">Prosečna isporuka</span>
                </div>
                <span className="text-sm font-semibold text-text-primary">{supplier.avgDeliveryDays} dana</span>
              </div>
              <div className="bg-surface rounded-lg p-2.5">
                <div className="flex items-center gap-1.5 text-text-muted mb-1">
                  <Package size={10} />
                  <span className="text-[10px]">Aktivne narudžbe</span>
                </div>
                <span className="text-sm font-semibold text-text-primary">{supplier.activeOrders}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] text-text-muted mb-1.5">
              <TrendingUp size={10} />
              Ukupno narudžbi: {supplier.totalOrders}
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-text-muted mb-1.5">
              <MapPin size={10} />
              {supplier.location}
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
              <Phone size={10} />
              {supplier.phone}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
