"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FolderKanban, ListTree, Truck, Wrench, Building2, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Komandni centar", icon: LayoutDashboard },
  { href: "/projekti", label: "Projekti", icon: FolderKanban },
  { href: "/bom/bsa-15-compact", label: "Lista delova", icon: ListTree },
  { href: "/nabavka", label: "Nabavka", icon: Truck },
  { href: "/servis", label: "Servis", icon: Wrench },
  { href: "/dobavljaci", label: "Dobavljači", icon: Building2 },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-surface-raised border-r border-border flex flex-col z-50">
      <div className="p-5 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-simi/20 flex items-center justify-center">
            <span className="text-simi font-bold text-sm">S</span>
          </div>
          <div>
            <h1 className="text-text-primary font-semibold text-sm tracking-tight">SIMI d.o.o.</h1>
            <p className="text-text-muted text-xs">Upravljanje proizvodnjom</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const isActive = item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150",
                isActive
                  ? "bg-simi/15 text-simi font-medium shadow-[inset_0_0_0_1px_rgba(174,8,11,0.2)]"
                  : "text-text-secondary hover:bg-surface-hover hover:text-text-primary"
              )}
            >
              <Icon size={18} className={cn(isActive ? "text-simi" : "text-text-muted")} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-2 mb-3">
          <div className="relative">
            <Brain size={16} className="text-simi" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-success rounded-full animate-pulse-slow" />
          </div>
          <span className="text-xs text-text-secondary">AI Agent aktivan</span>
        </div>
        <p className="text-[10px] text-text-muted">Powered by Emmoni</p>
      </div>
    </aside>
  );
}
