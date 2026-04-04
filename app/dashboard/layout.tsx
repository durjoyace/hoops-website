"use client";

import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface-950">
      <Sidebar />
      <div className="pl-[240px]">
        <DashboardHeader />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
