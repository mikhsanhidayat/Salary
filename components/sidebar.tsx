"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface User {
  name: string;
  email: string;
  role: string;
}

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  
  const [isMasterOpen, setIsMasterOpen] = useState(false);
  const [isPresensiOpen, setIsPresensiOpen] = useState(false);
  const [isGajiOpen, setIsGajiOpen] = useState(false);
  const [isCutiOpen, setIsCutiOpen] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (err) {
        console.error("Error parsing user data:", err);
      }
    }
  }, []);

  const handleLogout = () => {
    // Hapus token dan data user dari localStorage
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    
    // Redirect ke halaman sign-in
    router.push("/sign-in");
  };

  return (
    <div className="w-66 fixed z-20 h-screen bg-[#004d73] dark:bg-gray-900 text-white flex flex-col overflow-y-auto font-sans shadow-xl border-r border-white/10">
      
      {/* Logo Section */}
      <div className="flex items-center gap-3 p-6 mb-4 shrink-0">
        <div className="bg-[#22d3ee] w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-[#004d73] font-bold text-xl">S</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Salary<span className="text-[#22d3ee]">App</span>
        </h1>
      </div>

      {/* Navigation Area */}
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

        {/* Master Data Menu */}
        {user?.role  !== "user" &&(
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

          <div 
            className={`ml-6 mt-2 space-y-1 border-l border-white/20 overflow-hidden transition-all duration-300 ${
              isMasterOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
            }`}
          >
            <SubMenuItem href="/divisi" iconClass="fa-solid fa-building" label="Divisi" />
            <SubMenuItem href="/jabatan" iconClass="fa-solid fa-briefcase" label="Jabatan" />
            <SubMenuItem href="/karyawan" iconClass="fa-solid fa-user-group" label="Karyawan" />
            <SubMenuItem href="/user" iconClass="fa-solid fa-id-card" label="User" />
            <SubMenuItem href="/konfigurasi" iconClass="fa-solid fa-sliders" label="Konfigurasi" />
          </div>
        </div>

        )}
        
        
        {/* Presensi Dropdown */}
        <div className="mb-2">
          <button 
            onClick={() => setIsPresensiOpen(!isPresensiOpen)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border border-white/30 transition-all ${
              isPresensiOpen ? "bg-[#003d5c] border-white/50" : "bg-transparent hover:bg-white/5"
            }`}
          >
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-clock text-lg text-white"></i>
              <span className="font-medium text-[15px]">Presensi</span>
            </div>
            <i className={`fa-solid fa-chevron-up text-[10px] transition-transform duration-300 ${isPresensiOpen ? "" : "rotate-180"}`}></i>
          </button>

          <div 
            className={`ml-6 mt-2 space-y-1 border-l border-white/20 overflow-hidden transition-all duration-300 ${
              isPresensiOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
            }`}
          >
            {/* akses  user */}
            {user?.role !== "admin" && (
              
              <SubMenuItem href="/presensi/kehadiran" iconClass="fa-solid fa-chart-bar" label="Kehadiran" />
            )}
            {/* akses admin */}
            {user?.role === "admin" && (

            <SubMenuItem href="/presensi/report_presensi" iconClass="fa-solid fa-chart-bar" label="Report Presensi" />
            )}
          </div>  
        </div>

         {/* Cuti Dropdown */}
        <div className="mb-2">
          <button 
            onClick={() => setIsCutiOpen(!isCutiOpen)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border border-white/30 transition-all ${
              isCutiOpen ? "bg-[#003d5c] border-white/50" : "bg-transparent hover:bg-white/5"
            }`}
          >
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-calendar-minus text-lg text-white"></i>
              <span className="font-medium text-[15px]">Cuti</span>
            </div>
            <i className={`fa-solid fa-chevron-up text-[10px] transition-transform duration-300 ${isCutiOpen ? "" : "rotate-180"}`}></i>
          </button>

          <div 
            className={`ml-6 mt-2 space-y-1 border-l border-white/20 overflow-hidden transition-all duration-300 ${
              isCutiOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
            }`}
          >
            {/* akses user */}
            {user?.role !== "admin" && (
              <>  
                <SubMenuItem href="/cuti/form_pengajuan" iconClass="fa-solid fa-chart-pie" label="form pengajuan" />
                <SubMenuItem href="/cuti/riwayat_saldo" iconClass="fa-solid fa-chart-pie" label="Riwayat & saldo cuti" />
              </>
            )}
            {/* akses admin */}
            {user?.role === "admin" && (
              <SubMenuItem href="/cuti/report_cuti" iconClass="fa-solid fa-chart-pie" label="Report Cuti" />
            )}
            
          </div>  
        </div>

        {/* Gaji Dropdown */}
        <div className="mb-2">
          <button 
            onClick={() => setIsGajiOpen(!isGajiOpen)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border border-white/30 transition-all ${
              isGajiOpen ? "bg-[#003d5c] border-white/50" : "bg-transparent hover:bg-white/5"
            }`}
          >
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-money-bill-1-wave text-lg text-white"></i>
              <span className="font-medium text-[15px]">Gaji</span>
            </div>
            <i className={`fa-solid fa-chevron-up text-[10px] transition-transform duration-300 ${isGajiOpen ? "" : "rotate-180"}`}></i>
          </button>

          <div 
            className={`ml-6 mt-2 space-y-1 border-l border-white/20 overflow-hidden transition-all duration-300 ${
              isGajiOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
            }`}
          >
            {/* Menu untuk admin */}
            {user?.role !== "user" && (
              <>
                <SubMenuItem href="/gaji/proses_gaji" iconClass="fa-solid fa-cogs" label="Proses Gaji" />
                <SubMenuItem href="/gaji/report_gaji" iconClass="fa-solid fa-chart-line" label="Report Gaji" />
              </>
            )}
            
            {/* Menu untuk user */}
            {user?.role === "user" && (
              <SubMenuItem href="/gaji/slip_gaji" iconClass="fa-solid fa-file-invoice-dollar" label="Slip Gaji" />
            )}
          </div>  
        </div>

      
      </nav>

      {/* Logout Section - Fixed at bottom */}
      <div className="p-4 mt-auto">
        <button 
          onClick={handleLogout}
          className="flex items-center gap-4 px-4 py-3 rounded-xl text-white/70 hover:bg-white/5 transition-all w-full text-left"
        >
          <i className="fa-solid fa-right-from-bracket text-lg text-white"></i>
          <span className="font-medium text-[15px]">Logout</span>
        </button>
      </div>
    </div>
  );
}


  
  

// --- Helper Components ---
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