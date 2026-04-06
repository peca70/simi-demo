"use client";

import { useState } from "react";
import { ChevronRight, ChevronDown, Package, Wrench, Cog, Hash } from "lucide-react";
import { bomTree, countParts } from "@/lib/data/bom";
import { BomNode, ComponentType } from "@/lib/types";
import StatusBadge from "@/components/StatusBadge";
import { cn } from "@/lib/utils";

const typeColors: Record<ComponentType, { bg: string; text: string; label: string; icon: typeof Package }> = {
  fabricated: { bg: "border-l-fabricated", text: "text-fabricated", label: "Fabricacija", icon: Wrench },
  purchased: { bg: "border-l-purchased", text: "text-purchased", label: "Nabavka", icon: Package },
  hardware: { bg: "border-l-hardware", text: "text-hardware", label: "Vijčana roba", icon: Cog },
};

function TreeNode({ node, depth, onSelect, selectedId }: {
  node: BomNode;
  depth: number;
  onSelect: (node: BomNode) => void;
  selectedId: string;
}) {
  const [expanded, setExpanded] = useState(depth < 2);
  const hasChildren = node.children.some((c) => c.children.length > 0);
  const isAssembly = node.children.length > 0;
  const counts = countParts(node);
  const isSelected = node.id === selectedId;

  return (
    <div>
      <button
        onClick={() => {
          if (isAssembly) {
            setExpanded(!expanded);
            onSelect(node);
          }
        }}
        className={cn(
          "w-full flex items-center gap-1.5 px-2 py-1.5 text-left rounded-md text-xs transition-colors hover:bg-surface-hover",
          isSelected && "bg-simi/10 text-simi"
        )}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
      >
        {isAssembly ? (
          expanded ? <ChevronDown size={14} className="shrink-0 text-text-muted" /> : <ChevronRight size={14} className="shrink-0 text-text-muted" />
        ) : (
          <span className="w-3.5" />
        )}
        <span className={cn("font-mono text-[10px] shrink-0", isSelected ? "text-simi" : "text-text-muted")}>{node.partNumber}</span>
        <span className={cn("truncate", isAssembly ? "font-medium text-text-primary" : "text-text-secondary")}>{node.name}</span>
        {isAssembly && (
          <span className="ml-auto text-[10px] text-text-muted shrink-0 bg-surface-hover px-1.5 py-0.5 rounded">
            {counts.total}
          </span>
        )}
      </button>
      {expanded && node.children.map((child) =>
        child.children.length > 0 ? (
          <TreeNode key={child.id} node={child} depth={depth + 1} onSelect={onSelect} selectedId={selectedId} />
        ) : null
      )}
    </div>
  );
}

export default function BomPage() {
  const [selectedNode, setSelectedNode] = useState<BomNode>(bomTree.children[0]);
  const [breadcrumb, setBreadcrumb] = useState<string[]>(["BETONARA BSA 15", "ŠASIJA BETONARE BSA"]);

  const handleSelect = (node: BomNode) => {
    setSelectedNode(node);
    const path: string[] = ["BETONARA BSA 15"];
    function findPath(current: BomNode, target: string, trail: string[]): boolean {
      if (current.id === target) {
        path.push(...trail);
        return true;
      }
      for (const child of current.children) {
        if (findPath(child, target, [...trail, child.name])) return true;
      }
      return false;
    }
    findPath(bomTree, node.id, []);
    setBreadcrumb(path);
  };

  const parts = selectedNode.children.filter((c) => c.children.length === 0);
  const subAssemblies = selectedNode.children.filter((c) => c.children.length > 0);
  const allItems = [...subAssemblies, ...parts];
  const counts = countParts(selectedNode);

  return (
    <div className="flex gap-4 h-[calc(100vh-48px)]">
      {/* Left Tree Panel */}
      <div className="w-72 shrink-0 bg-surface-raised border border-border rounded-xl overflow-y-auto">
        <div className="p-3 border-b border-border">
          <h2 className="text-sm font-semibold text-text-primary">BSA 15 COMPACT</h2>
          <p className="text-[10px] text-text-muted">Pink Plus - Plovdiv, Bugarska</p>
        </div>
        <div className="p-1">
          {bomTree.children.map((child) => (
            <TreeNode key={child.id} node={child} depth={0} onSelect={handleSelect} selectedId={selectedNode.id} />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto space-y-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-text-muted">
          {breadcrumb.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={12} />}
              <span className={i === breadcrumb.length - 1 ? "text-text-primary font-medium" : ""}>{item}</span>
            </span>
          ))}
        </div>

        {/* Summary Bar */}
        <div className="flex items-center gap-4 bg-surface-raised border border-border rounded-lg px-4 py-2.5">
          <span className="text-xs text-text-secondary flex items-center gap-1.5">
            <Hash size={12} />
            <span className="font-medium text-text-primary">{counts.total}</span> delova ukupno
          </span>
          <span className="text-xs flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-sm bg-fabricated" />
            {counts.fabricated} fabricacija
          </span>
          <span className="text-xs flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-sm bg-purchased" />
            {counts.purchased} nabavka
          </span>
          <span className="text-xs flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-sm bg-hardware" />
            {counts.hardware} vijčana roba
          </span>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
          {allItems.map((item) => {
            const tc = typeColors[item.componentType];
            const Icon = tc.icon;
            const isAssembly = item.children.length > 0;
            const itemCounts = isAssembly ? countParts(item) : null;

            return (
              <div
                key={item.id}
                onClick={() => isAssembly && handleSelect(item)}
                className={cn(
                  "bg-surface-raised border border-border rounded-lg p-4 border-l-4 hover:border-border-light transition-all",
                  tc.bg,
                  isAssembly && "cursor-pointer hover:bg-surface-hover"
                )}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon size={14} className={tc.text} />
                    <span className="font-mono text-[10px] text-text-muted">{item.partNumber}</span>
                  </div>
                  {item.status && <StatusBadge status={item.status} />}
                  {isAssembly && (
                    <span className="text-[10px] bg-surface-hover px-2 py-0.5 rounded text-text-muted">
                      {itemCounts?.total} delova →
                    </span>
                  )}
                </div>
                <h4 className="text-sm font-medium text-text-primary mb-1">{item.name}</h4>
                <div className="flex items-center gap-3 text-[10px] text-text-muted">
                  {item.material && <span>{item.material}</span>}
                  {item.standard && <span>{item.standard}</span>}
                  <span>Kol: {item.quantity}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
