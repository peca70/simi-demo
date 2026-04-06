import { ProcurementItem } from "../types";

export const procurementItems: ProcurementItem[] = [
  // KASNI
  { id: "pr-1", partNumber: "FLINTEC-2", partName: "Merna ćelija SLB 2000lb", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "FLINTEC Srbija", status: "kasni", orderDate: "2026-03-15", expectedDate: "2026-04-01", daysLate: 5, quantity: 2, priceRsd: 145000 },
  { id: "pr-2", partNumber: "30.3100.04", partName: "Gumena obloga 6mm", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "GUMINS Novi Sad", status: "kasni", orderDate: "2026-03-20", expectedDate: "2026-04-03", daysLate: 3, quantity: 1, priceRsd: 8500 },
  { id: "pr-3", partNumber: "30.3200.04", partName: "Gumena obloga 6mm", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "GUMINS Novi Sad", status: "kasni", orderDate: "2026-03-20", expectedDate: "2026-04-03", daysLate: 3, quantity: 1, priceRsd: 8500 },
  { id: "pr-4", partNumber: "30.9130.03", partName: "Brava (EVROTEHNA)", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "EVROTEHNA Kraljevo", status: "kasni", orderDate: "2026-03-18", expectedDate: "2026-04-02", daysLate: 4, quantity: 4, priceRsd: 12000 },
  { id: "pr-5", partNumber: "30.3500.05", partName: "El. magnetni razvodnik NO7", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "Pneumatik RS", status: "kasni", orderDate: "2026-03-22", expectedDate: "2026-04-04", daysLate: 2, quantity: 1, priceRsd: 35000 },
  { id: "pr-6", partNumber: "GUMINS", partName: "Gumeni profil 9m", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "GUMINS Novi Sad", status: "kasni", orderDate: "2026-03-20", expectedDate: "2026-04-03", daysLate: 3, quantity: 1, priceRsd: 15000 },

  // NARUCENO
  { id: "pr-7", partNumber: "30.1210.10", partName: "Nosač lim 5", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "Metalopromet BG", status: "naruceno", orderDate: "2026-03-28", expectedDate: "2026-04-10", daysUntil: 4, quantity: 8, priceRsd: 4200 },
  { id: "pr-8", partNumber: "30.1310.01", partName: "Omotač lim 4", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "Metalopromet BG", status: "naruceno", orderDate: "2026-03-28", expectedDate: "2026-04-12", daysUntil: 6, quantity: 1, priceRsd: 18500 },
  { id: "pr-9", partNumber: "77.4110.04", partName: "Priključak 3/4\"", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "Industrijska oprema NS", status: "naruceno", orderDate: "2026-04-01", expectedDate: "2026-04-14", daysUntil: 8, quantity: 4, priceRsd: 3200 },
  { id: "pr-10", partNumber: "273.1500.01", partName: "Profil UNP18", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "Profil Čelik", status: "naruceno", orderDate: "2026-03-25", expectedDate: "2026-04-08", daysUntil: 2, quantity: 1, priceRsd: 22000 },
  { id: "pr-11", partNumber: "FLINTEC", partName: "Merna ćelija SLB 5000lb", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "FLINTEC Srbija", status: "naruceno", orderDate: "2026-03-18", expectedDate: "2026-04-09", daysUntil: 3, quantity: 2, priceRsd: 185000 },
  { id: "pr-12", partNumber: "30.9110.01", partName: "Stranica ormana - vert.", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "Lim Inox BG", status: "naruceno", orderDate: "2026-04-02", expectedDate: "2026-04-16", daysUntil: 10, quantity: 2, priceRsd: 9500 },
  { id: "pr-13", partNumber: "30.9900.02", partName: "Staklo vrata Panplex", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "PANPLEX Subotica", status: "naruceno", orderDate: "2026-04-01", expectedDate: "2026-04-18", daysUntil: 12, quantity: 2, priceRsd: 7800 },
  { id: "pr-14", partNumber: "30.6120.00", partName: "Vodomer BÜRKERT 8035", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "Bürkert Srbija", status: "naruceno", orderDate: "2026-03-20", expectedDate: "2026-04-15", daysUntil: 9, quantity: 1, priceRsd: 95000 },
  { id: "pr-15", partNumber: "30.8310.00", partName: "Obujmica puža", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "Metalopromet BG", status: "naruceno", orderDate: "2026-04-03", expectedDate: "2026-04-17", daysUntil: 11, quantity: 1, priceRsd: 28000 },
  { id: "pr-16", partNumber: "30.1410.01", partName: "Osnova krivine lim 8", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "Metalopromet BG", status: "naruceno", orderDate: "2026-04-02", expectedDate: "2026-04-14", daysUntil: 8, quantity: 1, priceRsd: 14000 },

  // CEKA
  { id: "pr-17", partNumber: "30.1110.08", partName: "Kosnik cev 120x60x5", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "-", status: "ceka", quantity: 1, priceRsd: 11000 },
  { id: "pr-18", partNumber: "30.1210.07", partName: "Usmernik lim 4", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "-", status: "ceka", quantity: 1, priceRsd: 5500 },
  { id: "pr-19", partNumber: "273.1500.02", partName: "Profil UNP14", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "-", status: "ceka", quantity: 2, priceRsd: 16000 },
  { id: "pr-20", partNumber: "30.3320.04", partName: "Traka lim 5", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "-", status: "ceka", quantity: 1, priceRsd: 3800 },
  { id: "pr-21", partNumber: "30.9120.01", partName: "Vrata ormana lim 2", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "-", status: "ceka", quantity: 1, priceRsd: 7200 },
  { id: "pr-22", partNumber: "30.6130.00", partName: "Ventil G 1 1/2 PPT", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "-", status: "ceka", quantity: 1, priceRsd: 42000 },
  { id: "pr-23", partNumber: "38.8300.00", partName: "Ugradnja pužnog transp.", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "-", status: "ceka", quantity: 1, priceRsd: 85000 },

  // STIGLO
  { id: "pr-24", partNumber: "30.1110.09", partName: "Noga - leva HEB 120", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "Profil Čelik", status: "stiglo", orderDate: "2026-03-10", expectedDate: "2026-03-25", quantity: 1, priceRsd: 32000 },
  { id: "pr-25", partNumber: "30.1120.09", partName: "Noga - desna HEB 120", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "Profil Čelik", status: "stiglo", orderDate: "2026-03-10", expectedDate: "2026-03-25", quantity: 1, priceRsd: 32000 },
  { id: "pr-26", partNumber: "001089", partName: "Vijak M16x40", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "Vijčana roba BG", status: "stiglo", orderDate: "2026-03-12", expectedDate: "2026-03-18", quantity: 48, priceRsd: 280 },
  { id: "pr-27", partNumber: "001014", partName: "El. podmetač A16", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "Vijčana roba BG", status: "stiglo", orderDate: "2026-03-12", expectedDate: "2026-03-18", quantity: 48, priceRsd: 85 },
  { id: "pr-28", partNumber: "30.1400.01", partName: "Profil prednji UNP12", projectId: "bsa-15-compact", projectName: "BSA 15 COMPACT", supplier: "Profil Čelik", status: "stiglo", orderDate: "2026-03-10", expectedDate: "2026-03-22", quantity: 2, priceRsd: 18500 },
];
