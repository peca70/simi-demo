import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "SIMI d.o.o. - Upravljanje proizvodnjom",
  description: "Proizvodni ERP sa AI agentom za praćenje projekata, nabavke i rokova",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-surface text-text-primary">
        <Sidebar />
        <main className="ml-64 min-h-screen p-6">{children}</main>
      </body>
    </html>
  );
}
