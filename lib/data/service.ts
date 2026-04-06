import { ServiceOrder } from "../types";

export const serviceOrders: ServiceOrder[] = [
  { id: "so-1", client: "Beton Aranđelovac", machine: "BSA 15 COMPACT (2024)", issue: "Vibrator mešalice - smanjena snaga, proveriti ležajeve", technician: "Dragan M.", status: "zakazano", scheduledDate: "2026-04-10", priority: "normalno" },
  { id: "so-2", client: "GP Beton Čačak", machine: "BSA 30 LS (2023)", issue: "Zatvarač 320x400 - gumena obloga istrošena, zamena", technician: "Milan S.", status: "u_toku", scheduledDate: "2026-04-06", priority: "hitno" },
  { id: "so-3", client: "Cementara Popovac", machine: "MSA 1000 (2022)", issue: "Vaga za cement - kalibracija mernih ćelija", technician: "Dragan M.", status: "zakazano", scheduledDate: "2026-04-15", priority: "normalno" },
  { id: "so-4", client: "Asfalti Vranje", machine: "AB-40 (2021)", issue: "Pužni transporter - zamena ležaja i zaptivke", technician: "Nenad P.", status: "zavrseno", scheduledDate: "2026-04-02", priority: "hitno" },
  { id: "so-5", client: "Beton Mix Kruševac", machine: "BSA 15 MOBILE (2025)", issue: "Komandni orman - zamena prekidača i provera ožičenja", technician: "Milan S.", status: "zakazano", scheduledDate: "2026-04-18", priority: "nisko" },
];
