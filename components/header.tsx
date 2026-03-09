
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
  role: string;
}

export default function Header() {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);

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

  // Logika untuk menentukan judul berdasarkan URL
  const getTitle = () => {
    if (pathname.includes("/divisi")) return "Divisi";
    if (pathname.includes("/jabatan")) return "Jabatan";
    if (pathname.includes("/karyawan")) return "Karyawan";
    if (pathname.includes("/user")) return "User";
    if (pathname.includes("/konfigurasi")) return "Konfigurasi";
    if (pathname.includes("/presensi")) return "Presensi";
    if (pathname.includes("/slip_gaji")) return "Slip Gaji";
    if (pathname.includes("/cuti")) return "Cuti";
    return "Dashboard";
  };

  const getInitial = (name: string) => {
    return name ? name.charAt(0).toUpperCase() : "U";
  };

  // function untuk cek akun ada atau tidak, jika tidak ada redirect ke sign-in
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      window.location.href = "/sign-in";
    }
  }, []);

  return (
    <header className="sticky pl-80 top-0 fixed z-10 flex h-16 items-center justify-between border-b bg-white/80 backdrop-blur-md px-8 dark:bg-zinc-900/80 shadow-sm border-zinc-100 dark:border-zinc-800">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-[#004d73] dark:text-white tracking-tight">
          {getTitle()}
        </h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-zinc-900 dark:text-white leading-tight">
              {user?.name || "User"}
            </p> 
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {user?.role || "Role"}
            </p>
          </div>
          <div className="h-10 w-10 rounded-xl bg-[#004d73]/5 dark:bg-white/5 border border-[#004d73]/10 dark:border-white/10 flex items-center justify-center text-[#004d73] font-bold shadow-inner">
            {getInitial(user?.name || "")}
          </div>
        </div>
      </div>
    </header>
  );
}