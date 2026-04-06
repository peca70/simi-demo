export type ComponentType = "fabricated" | "purchased" | "hardware";
export type ProcurementStatus = "kasni" | "naruceno" | "ceka" | "stiglo" | "u_izradi";
export type ProjectPhase = "dokumentacija" | "nabavka" | "kooperacija" | "secenje_varenje" | "peskarenje_farbanje" | "sklapanje" | "elektrifikacija" | "isporuka";
export type ServiceStatus = "zakazano" | "u_toku" | "zavrseno";
export type AiInsightType = "nabavka" | "rok" | "kooperacija" | "optimizacija" | "pattern";

export interface BomNode {
  id: string;
  name: string;
  partNumber: string;
  level: number;
  material?: string;
  standard?: string;
  quantity: number;
  componentType: ComponentType;
  status?: ProcurementStatus;
  children: BomNode[];
}

export interface Project {
  id: string;
  name: string;
  client: string;
  location: string;
  currentPhase: ProjectPhase;
  phaseProgress: number;
  deadline: string;
  totalParts: number;
  orderedParts: number;
  receivedParts: number;
  status: "u_roku" | "upozorenje" | "kasni";
}

export interface ProcurementItem {
  id: string;
  partNumber: string;
  partName: string;
  projectId: string;
  projectName: string;
  supplier: string;
  status: ProcurementStatus;
  orderDate?: string;
  expectedDate?: string;
  daysLate?: number;
  daysUntil?: number;
  priceRsd?: number;
  quantity: number;
}

export interface AiInsight {
  id: string;
  type: AiInsightType;
  title: string;
  description: string;
  projectId?: string;
  projectName?: string;
  confidence: number;
  priority: "critical" | "high" | "medium";
  timestamp: string;
}

export interface Supplier {
  id: string;
  name: string;
  category: string;
  avgDeliveryDays: number;
  reliabilityScore: number;
  activeOrders: number;
  totalOrders: number;
  phone: string;
  location: string;
}

export interface ServiceOrder {
  id: string;
  client: string;
  machine: string;
  issue: string;
  technician: string;
  status: ServiceStatus;
  scheduledDate: string;
  priority: "hitno" | "normalno" | "nisko";
}

export const PHASE_LABELS: Record<ProjectPhase, string> = {
  dokumentacija: "Dokumentacija",
  nabavka: "Nabavka",
  kooperacija: "Kooperacija",
  secenje_varenje: "Sečenje / Varenje",
  peskarenje_farbanje: "Peskarenje / Farbanje",
  sklapanje: "Sklapanje",
  elektrifikacija: "Elektrifikacija",
  isporuka: "Isporuka / Montaža",
};

export const PHASE_ORDER: ProjectPhase[] = [
  "dokumentacija", "nabavka", "kooperacija", "secenje_varenje",
  "peskarenje_farbanje", "sklapanje", "elektrifikacija", "isporuka",
];

export const STATUS_LABELS: Record<ProcurementStatus, string> = {
  kasni: "Kasni",
  naruceno: "Naručeno",
  ceka: "Čeka narudžbu",
  stiglo: "Stiglo",
  u_izradi: "U izradi",
};
