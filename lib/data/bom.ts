import { BomNode } from "../types";

export const bomTree: BomNode = {
  id: "root",
  partNumber: "273.0000.00",
  name: "BETONARA BSA 15",
  level: 0,
  quantity: 1,
  componentType: "fabricated",
  children: [
    {
      id: "sasija",
      partNumber: "273.1000.00",
      name: "ŠASIJA BETONARE BSA",
      level: 1,
      quantity: 1,
      componentType: "fabricated",
      children: [
        {
          id: "noge",
          partNumber: "273.1100.00",
          name: "NOGE BETONARE",
          level: 2,
          quantity: 1,
          componentType: "fabricated",
          children: [
            {
              id: "leva-strana",
              partNumber: "273.1110.00",
              name: "LEVA STRANA",
              level: 3,
              quantity: 1,
              componentType: "fabricated",
              children: [
                { id: "p1", partNumber: "30.1110.09", name: "Noga - leva", material: "profil HEB 120", standard: "Č.0370", quantity: 1, level: 4, componentType: "fabricated", status: "stiglo", children: [] },
                { id: "p2", partNumber: "30.1110.02", name: "Ploča", material: "lim 10", standard: "Č.0361", quantity: 1, level: 4, componentType: "fabricated", status: "stiglo", children: [] },
                { id: "p3", partNumber: "30.1110.04", name: "Ploča", material: "lim 10", standard: "Č.0361", quantity: 1, level: 4, componentType: "fabricated", status: "u_izradi", children: [] },
                { id: "p4", partNumber: "30.1110.01", name: "Profil - levi", material: "UNP12", standard: "JUS C.B3.141, Č.0370", quantity: 1, level: 4, componentType: "fabricated", status: "u_izradi", children: [] },
                { id: "p5", partNumber: "30.1110.06", name: "Nosač - gornji", material: "UNP12", standard: "JUS C.B3.141, Č.0370", quantity: 1, level: 4, componentType: "fabricated", status: "stiglo", children: [] },
                { id: "p6", partNumber: "30.1110.07", name: "Nosač - donji", material: "UNP12", standard: "JUS C.B3.141, Č.0370", quantity: 1, level: 4, componentType: "fabricated", status: "stiglo", children: [] },
                { id: "p7", partNumber: "30.1110.08", name: "Kosnik", material: "cev 120x60x5", standard: "Č.0370", quantity: 1, level: 4, componentType: "fabricated", status: "ceka", children: [] },
              ],
            },
            {
              id: "desna-strana",
              partNumber: "273.1120.00",
              name: "DESNA STRANA",
              level: 3,
              quantity: 1,
              componentType: "fabricated",
              children: [
                { id: "p8", partNumber: "30.1120.09", name: "Noga - desna", material: "profil HEB 120", standard: "Č.0370", quantity: 1, level: 4, componentType: "fabricated", status: "stiglo", children: [] },
                { id: "p9", partNumber: "30.1120.01", name: "Profil - desni", material: "UNP12", standard: "JUS C.B3.141, Č.0370", quantity: 1, level: 4, componentType: "fabricated", status: "u_izradi", children: [] },
              ],
            },
            {
              id: "sine-srednji",
              partNumber: "30.1130.00",
              name: "ŠINE - SREDNJI DEO",
              level: 3,
              quantity: 2,
              componentType: "fabricated",
              children: [
                { id: "p10", partNumber: "30.1130.01", name: "Šina", material: "UNP12", standard: "JUS C.B3.141, Č.0370", quantity: 1, level: 4, componentType: "fabricated", status: "stiglo", children: [] },
                { id: "p11", partNumber: "001089", name: "Vijak M16x40", standard: "JUS M.B1.053, 5.8", quantity: 8, level: 4, componentType: "hardware", status: "stiglo", children: [] },
                { id: "p12", partNumber: "001014", name: "El. podmetač A16", standard: "JUS M.B2.110", quantity: 8, level: 4, componentType: "hardware", status: "stiglo", children: [] },
                { id: "p13", partNumber: "001009", name: "Navrtka M16", standard: "JUS M.B1.601, 6", quantity: 8, level: 4, componentType: "hardware", status: "stiglo", children: [] },
              ],
            },
          ],
        },
        {
          id: "donji-zvezda",
          partNumber: "273.1200.00",
          name: "DONJI DEO ZVEZDE - sklop",
          level: 2,
          quantity: 1,
          componentType: "fabricated",
          children: [
            {
              id: "zvezda-telo",
              partNumber: "273.1210.00",
              name: "DONJI DEO ZVEZDE",
              level: 3,
              quantity: 1,
              componentType: "fabricated",
              children: [
                { id: "p14", partNumber: "30.1210.01", name: "Gornja ploča", material: "lim 10", standard: "Č.0562", quantity: 1, level: 4, componentType: "fabricated", status: "u_izradi", children: [] },
                { id: "p15", partNumber: "30.1210.02", name: "Omotač", material: "lim 4", standard: "Č.0562", quantity: 1, level: 4, componentType: "fabricated", status: "u_izradi", children: [] },
                { id: "p16", partNumber: "30.1210.07", name: "Usmernik", material: "lim 4", standard: "Č.0562", quantity: 1, level: 4, componentType: "fabricated", status: "ceka", children: [] },
                { id: "p17", partNumber: "30.1210.10", name: "Nosač", material: "lim 5", standard: "Č.0361", quantity: 8, level: 4, componentType: "fabricated", status: "naruceno", children: [] },
              ],
            },
          ],
        },
        {
          id: "srednji-zvezda",
          partNumber: "273.1300.00",
          name: "SREDNJI DEO ZVEZDE - sklop",
          level: 2,
          quantity: 1,
          componentType: "fabricated",
          children: [
            { id: "p18", partNumber: "30.1310.01", name: "Omotač", material: "lim 4", standard: "Č.0562", quantity: 1, level: 3, componentType: "fabricated", status: "naruceno", children: [] },
            { id: "p19", partNumber: "30.1310.04", name: "Nosač cilindra", material: "lim 5", standard: "Č.0361", quantity: 4, level: 3, componentType: "fabricated", status: "u_izradi", children: [] },
            { id: "p20", partNumber: "30.1310.05", name: "Nosač vibratora", material: "lim 5", standard: "Č.0361", quantity: 1, level: 3, componentType: "fabricated", status: "stiglo", children: [] },
          ],
        },
        {
          id: "platforma",
          partNumber: "273.1400.00",
          name: "ŠASIJA - PLATFORMA MEŠALICE",
          level: 2,
          quantity: 1,
          componentType: "fabricated",
          children: [
            { id: "p21", partNumber: "30.1400.01", name: "Profil - prednji", material: "UNP12", standard: "JUS C.B3.141, Č.0370", quantity: 2, level: 3, componentType: "fabricated", status: "stiglo", children: [] },
            { id: "p22", partNumber: "30.1400.02", name: "Profil - zadnji", material: "UNP12", standard: "JUS C.B3.141, Č.0370", quantity: 2, level: 3, componentType: "fabricated", status: "stiglo", children: [] },
            {
              id: "krivina",
              partNumber: "30.1410.00",
              name: "KRIVINA",
              level: 3,
              quantity: 1,
              componentType: "fabricated",
              children: [
                { id: "p23", partNumber: "30.1410.01", name: "Osnova krivine", material: "lim 8", standard: "Č.0562", quantity: 1, level: 4, componentType: "fabricated", status: "naruceno", children: [] },
                { id: "p24", partNumber: "30.1410.02", name: "Spoljni venac", material: "lim 10", standard: "Č.0562", quantity: 1, level: 4, componentType: "fabricated", status: "naruceno", children: [] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "zatvaraci",
      partNumber: "30.3000.00",
      name: "ZATVARAČI",
      level: 1,
      quantity: 1,
      componentType: "fabricated",
      children: [
        {
          id: "zatvarac-320",
          partNumber: "30.3100.00",
          name: "ZATVARAČ 320x400",
          level: 2,
          quantity: 1,
          componentType: "fabricated",
          children: [
            { id: "p25", partNumber: "30.3111.01", name: "Traka", material: "lim 5", standard: "Č.0361", quantity: 2, level: 3, componentType: "fabricated", status: "stiglo", children: [] },
            { id: "p26", partNumber: "30.3110.01", name: "Prednja strana", material: "lim 4", standard: "Č.0361", quantity: 1, level: 3, componentType: "fabricated", status: "stiglo", children: [] },
            { id: "p27", partNumber: "30.3112.02", name: "Čaura", material: "fi 60", standard: "Č.1330", quantity: 1, level: 3, componentType: "fabricated", status: "stiglo", children: [] },
            { id: "p28", partNumber: "30.3100.04", name: "Gumena obloga", material: "guma 6 mm", quantity: 1, level: 3, componentType: "purchased", status: "kasni", children: [] },
          ],
        },
        {
          id: "zatvarac-260",
          partNumber: "30.3200.00",
          name: "ZATVARAČ 260x400",
          level: 2,
          quantity: 1,
          componentType: "fabricated",
          children: [
            { id: "p29", partNumber: "30.3211.02", name: "Traka", material: "lim 5", standard: "Č.0361", quantity: 1, level: 3, componentType: "fabricated", status: "u_izradi", children: [] },
            { id: "p30", partNumber: "30.3200.04", name: "Gumena obloga", material: "guma 6 mm", quantity: 1, level: 3, componentType: "purchased", status: "kasni", children: [] },
          ],
        },
        {
          id: "zatvarac-260-l",
          partNumber: "30.3300.00",
          name: "ZATVARAČ 260x400 - levi",
          level: 2,
          quantity: 1,
          componentType: "fabricated",
          children: [
            { id: "p31", partNumber: "30.3320.04", name: "Traka", material: "lim 5", standard: "Č.0361", quantity: 1, level: 3, componentType: "fabricated", status: "ceka", children: [] },
          ],
        },
      ],
    },
    {
      id: "mesalica",
      partNumber: "031.0000.00",
      name: "MEŠALICA 075/050",
      level: 1,
      quantity: 1,
      componentType: "fabricated",
      children: [
        {
          id: "poklopac",
          partNumber: "77.4000.00",
          name: "POKLOPAC MEŠALICE",
          level: 2,
          quantity: 1,
          componentType: "fabricated",
          children: [
            { id: "p32", partNumber: "77.4110.01", name: "Nosač", material: "cev 80x80x5", standard: "Č.0361", quantity: 1, level: 3, componentType: "fabricated", status: "stiglo", children: [] },
            { id: "p33", partNumber: "77.4110.04", name: "Priključak 3/4\"", material: "fi 45", standard: "Č.1330", quantity: 4, level: 3, componentType: "purchased", status: "naruceno", children: [] },
          ],
        },
        {
          id: "nosac-skrepera",
          partNumber: "273.1500.00",
          name: "NOSAČ SKREPERA",
          level: 2,
          quantity: 1,
          componentType: "fabricated",
          children: [
            { id: "p34", partNumber: "273.1500.01", name: "Profil", material: "UNP18", standard: "JUS C.B3.141, Č.0370", quantity: 1, level: 3, componentType: "fabricated", status: "naruceno", children: [] },
            { id: "p35", partNumber: "273.1500.02", name: "Profil", material: "UNP14", standard: "JUS C.B3.141, Č.0370", quantity: 2, level: 3, componentType: "fabricated", status: "ceka", children: [] },
          ],
        },
      ],
    },
    {
      id: "vage",
      partNumber: "273.5000.00",
      name: "VAGE",
      level: 1,
      quantity: 1,
      componentType: "fabricated",
      children: [
        {
          id: "vaga-agregat",
          partNumber: "273.5600.00",
          name: "VAGA ZA AGREGAT",
          level: 2,
          quantity: 1,
          componentType: "fabricated",
          children: [
            { id: "p36", partNumber: "273.5610.01", name: "Koš vage", material: "lim 4", standard: "Č.0562", quantity: 1, level: 3, componentType: "fabricated", status: "u_izradi", children: [] },
            { id: "p37", partNumber: "FLINTEC", name: "Merna ćelija SLB 5000lb", material: "FLINTEC BH-C3", quantity: 2, level: 3, componentType: "purchased", status: "naruceno", children: [] },
          ],
        },
        {
          id: "vaga-cement",
          partNumber: "77.5200.00",
          name: "VAGA ZA CEMENT",
          level: 2,
          quantity: 1,
          componentType: "purchased",
          children: [
            { id: "p38", partNumber: "FLINTEC-2", name: "Merna ćelija SLB 2000lb", material: "FLINTEC BH-C3", quantity: 2, level: 3, componentType: "purchased", status: "kasni", children: [] },
          ],
        },
      ],
    },
    {
      id: "transporter",
      partNumber: "226.1000.00",
      name: "PUŽNI TRANSPORTER",
      level: 1,
      quantity: 1,
      componentType: "fabricated",
      children: [
        { id: "p39", partNumber: "38.8300.00", name: "Ugradnja pužnog transportera", quantity: 1, level: 2, componentType: "fabricated", status: "ceka", children: [] },
        { id: "p40", partNumber: "30.8310.00", name: "Obujmica puža", quantity: 1, level: 2, componentType: "fabricated", status: "naruceno", children: [] },
        { id: "p41", partNumber: "65.5000.00", name: "Zatvarač cementa", quantity: 1, level: 2, componentType: "fabricated", status: "u_izradi", children: [] },
      ],
    },
    {
      id: "komandni-orman",
      partNumber: "30.9100.00",
      name: "KOMANDNI ORMAN COMPACT BSA 30",
      level: 1,
      quantity: 1,
      componentType: "fabricated",
      children: [
        {
          id: "sasija-ormana",
          partNumber: "30.9110.00",
          name: "ŠASIJA ORMANA",
          level: 2,
          quantity: 1,
          componentType: "fabricated",
          children: [
            { id: "p42", partNumber: "30.9110.01", name: "Stranica ormana - vertikalna", material: "lim 2", standard: "Č.0146", quantity: 2, level: 3, componentType: "fabricated", status: "naruceno", children: [] },
            { id: "p43", partNumber: "30.9110.02", name: "Stranica ormana - horizontalna", material: "lim 2", standard: "Č.0146", quantity: 2, level: 3, componentType: "fabricated", status: "naruceno", children: [] },
          ],
        },
        {
          id: "vrata-orman",
          partNumber: "30.9120.00",
          name: "VRATA - sklop",
          level: 2,
          quantity: 2,
          componentType: "fabricated",
          children: [
            { id: "p44", partNumber: "30.9120.01", name: "Vrata", material: "lim 2", standard: "Č.0146", quantity: 1, level: 3, componentType: "fabricated", status: "ceka", children: [] },
            { id: "p45", partNumber: "30.9130.03", name: "Brava (EVROTEHNA - Kraljevo)", quantity: 4, level: 3, componentType: "purchased", status: "kasni", children: [] },
          ],
        },
      ],
    },
    {
      id: "kabina",
      partNumber: "30.9900.00",
      name: "KABINA BSA 30 LS",
      level: 1,
      quantity: 1,
      componentType: "fabricated",
      children: [
        {
          id: "sasija-kabine",
          partNumber: "30.9910.00",
          name: "ŠASIJA KABINE",
          level: 2,
          quantity: 1,
          componentType: "fabricated",
          children: [
            { id: "p46", partNumber: "30.9911.01", name: "Cev", material: "cev 40x40x3", standard: "Č.0361", quantity: 1, level: 3, componentType: "fabricated", status: "stiglo", children: [] },
            { id: "p47", partNumber: "30.9910.02", name: "Krov", material: "lim 2", standard: "Č.0146", quantity: 2, level: 3, componentType: "fabricated", status: "stiglo", children: [] },
          ],
        },
        {
          id: "oprema-kabine",
          partNumber: "30.9920.00",
          name: "OPREMA KABINE",
          level: 2,
          quantity: 1,
          componentType: "purchased",
          children: [
            { id: "p48", partNumber: "30.9900.02", name: "Staklo vrata", material: "Panplex 5 mm", quantity: 2, level: 3, componentType: "purchased", status: "naruceno", children: [] },
            { id: "p49", partNumber: "30.9900.04", name: "Staklo prozora", material: "Panplex 5 mm", quantity: 1, level: 3, componentType: "purchased", status: "naruceno", children: [] },
            { id: "p50", partNumber: "GUMINS", name: "Gumeni profil (GUMINS - Novi Sad)", material: "9 m", quantity: 1, level: 3, componentType: "purchased", status: "kasni", children: [] },
          ],
        },
      ],
    },
    {
      id: "pneumatika",
      partNumber: "130.3500.00",
      name: "PNEUMATSKI CILINDRI",
      level: 1,
      quantity: 4,
      componentType: "purchased",
      children: [
        { id: "p51", partNumber: "30.3500.09", name: "Cilindar 229 BB 50x350", quantity: 1, level: 2, componentType: "purchased", status: "naruceno", children: [] },
        { id: "p52", partNumber: "30.3500.05", name: "El. magnetni razvodnik NO7 242", quantity: 1, level: 2, componentType: "purchased", status: "kasni", children: [] },
        { id: "p53", partNumber: "001300", name: "Priključak 893 800 952 0", quantity: 4, level: 2, componentType: "hardware", status: "stiglo", children: [] },
      ],
    },
    {
      id: "instalacija-vode",
      partNumber: "30.6500.00",
      name: "INSTALACIJA ZA VODU",
      level: 1,
      quantity: 1,
      componentType: "fabricated",
      children: [
        { id: "p54", partNumber: "30.6120.00", name: "Vodomer BÜRKERT 8035, G 1 1/2", quantity: 1, level: 2, componentType: "purchased", status: "naruceno", children: [] },
        { id: "p55", partNumber: "30.6130.00", name: "Ventil G 1 1/2, 235 - PPT", quantity: 1, level: 2, componentType: "purchased", status: "ceka", children: [] },
        { id: "p56", partNumber: "30.6110.00", name: "Dizna - sklop", quantity: 2, level: 2, componentType: "fabricated", status: "u_izradi", children: [] },
      ],
    },
  ],
};

export function countParts(node: BomNode): { total: number; fabricated: number; purchased: number; hardware: number } {
  let total = 0, fabricated = 0, purchased = 0, hardware = 0;
  if (node.children.length === 0) {
    total = 1;
    if (node.componentType === "fabricated") fabricated = 1;
    else if (node.componentType === "purchased") purchased = 1;
    else hardware = 1;
  }
  for (const child of node.children) {
    const c = countParts(child);
    total += c.total;
    fabricated += c.fabricated;
    purchased += c.purchased;
    hardware += c.hardware;
  }
  return { total, fabricated, purchased, hardware };
}
