"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  // State untuk mengontrol dropdown Master (default: true)
  const [isMasterOpen, setIsMasterOpen] = useState(true);

  return (
    <div className="w-66 h-screen bg-[#004d73] text-white flex flex-col overflow-y-auto font-sans shadow-xl border-r border-white/10">
      
      {/* Logo Section */}
      <div className="flex items-center gap-3 p-6 mb-4">
        <div className="bg-[#22d3ee] w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-[#004d73] font-bold text-xl">S</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Salary<span className="text-[#22d3ee]">App</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        
        {/* Dashboard Link */}
        <Link 
          href="/dashboard" 
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all mb-2 ${
            pathname === "/dashboard" ? "bg-white/15 text-white" : "text-white/70 hover:bg-white/10"
          }`}
        >
          <i className="fa-solid fa-table-cells-large text-[#22d3ee] text-lg"></i>
          <span className="font-medium text-[15px]">Dashboard</span>
        </Link>

        {/* Master Data Menu dengan Dropdown */}
        <div className="mb-2">
          <button 
            onClick={() => setIsMasterOpen(!isMasterOpen)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border border-white/30 transition-all ${
              isMasterOpen ? "bg-[#003d5c] border-white/50" : "bg-transparent hover:bg-white/5"
            }`}
          >
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-layer-group text-lg text-white"></i>
              <span className="font-medium text-[15px]">Master</span>
            </div>
            <i className={`fa-solid fa-chevron-up text-[10px] transition-transform duration-300 ${isMasterOpen ? "" : "rotate-180"}`}></i>
          </button>

          {/* Sub-menu Master dengan garis vertikal */}
          <div 
            className={`ml-6 mt-2 space-y-1 border-l border-white/20 overflow-hidden transition-all duration-300 ${
              isMasterOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <SubMenuItem href="/dashboard/divisi" iconClass="fa-solid fa-building" label="Divisi" />
            <SubMenuItem href="/dashboard/jabatan" iconClass="fa-solid fa-briefcase" label="Jabatan" />
            <SubMenuItem href="/dashboard/karyawan" iconClass="fa-solid fa-user-group" label="Karyawan" />
            <SubMenuItem href="/dashboard/user" iconClass="fa-solid fa-id-card" label="User" />
            <SubMenuItem href="/dashboard/konfigurasi" iconClass="fa-solid fa-sliders" label="Konfigurasi" />
          </div>
        </div>

        {/* Menu Utama Lainnya */}
        <div className="pt-2 space-y-1">
          <MenuLink href="/dashboard/presensi" iconClass="fa-regular fa-calendar-check" label="Presensi" />
          <MenuLink href="/dashboard/cuti" iconClass="fa-regular fa-calendar-minus" label="Cuti" />
          <MenuLink href="/dashboard/gaji" iconClass="fa-solid fa-money-bill-1-wave" label="Gaji" />
        </div>

      </nav>
    </div>
  );
}

function MenuLink({ href, iconClass, label }: { href: string; iconClass: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
        isActive ? "bg-white/15 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
      }`}
    >
      <i className={`${iconClass} text-lg w-6 text-center`}></i>
      <span className="font-medium text-[15px]">{label}</span>
    </Link>
  );
}

function SubMenuItem({ href, iconClass, label }: { href: string; iconClass: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`flex items-center gap-4 px-6 py-2.5 transition-all text-[14px] ${
        isActive ? "text-[#22d3ee] font-semibold" : "text-white/60 hover:text-white"
      }`}
    >
      <i className={`${iconClass} w-5 text-center`}></i>
      <span>{label}</span>
    </Link>
  );
}