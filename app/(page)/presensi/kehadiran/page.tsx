'use client';

import React, { useState, useEffect } from 'react'

const page = () => {
  const [currentTime, setCurrentTime] = useState<string>('00.00.00');
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    // Set initial time
    const updateTime = () => {
      const now = new Date();
      
      // Format waktu HH.MM.SS
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}.${minutes}.${seconds}`);
      
      // Format tanggal (Hari, Tanggal Bulan Tahun)
      const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
      const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
      
      const day = dayNames[now.getDay()];
      const date = now.getDate();
      const month = monthNames[now.getMonth()];
      const year = now.getFullYear();
      
      setCurrentDate(`${day}, ${date} ${month} ${year}`);
    };

    // Update time immediately
    updateTime();

    // Update time setiap 1 detik
    const interval = setInterval(updateTime, 1000);

    // Cleanup interval saat component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      {/* Sidebar Spacer (lg:pl-64) agar konten tidak tertutup sidebar fixed */}
      <div className="flex flex-1 flex-col lg:pl-64">
        
 

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-7xl">
            <div className="space-y-8 animate-in fade-in duration-700">
              
              {/* Title & Clock Widget */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Presensi Kehadiran</h2>
                  <p className="text-slate-500 dark:text-slate-400 mt-1">Silahkan melakukan presensi harian Anda.</p>
                </div>
                
                <div className="bg-white dark:bg-zinc-900 px-6 py-4 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-zinc-800 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-xl">
                    <i className="fi fi-rr-clock-three"></i>
                  </div>
                  <div>
                    {/* waktu saat ini real time */}
                    <div className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">
                      {currentTime}
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      {currentDate}
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Form Section (Sticky on Desktop) */}
                <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
                  <div className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 dark:bg-zinc-900 dark:shadow-none border border-slate-100 dark:border-zinc-800">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <i className="fi fi-rr-edit"></i>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Form Presensi</h3>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-3 block">Status Kehadiran</label>
                        <div className="grid grid-cols-3 gap-3">
                          <button className="py-3 px-2 rounded-2xl text-xs font-bold transition-all border bg-primary border-primary text-white shadow-lg shadow-primary/30">Hadir</button>
                          <button className="py-3 px-2 rounded-2xl text-xs font-bold transition-all border bg-slate-50 border-slate-100 text-slate-500 hover:border-primary/30 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400">Izin</button>
                          <button className="py-3 px-2 rounded-2xl text-xs font-bold transition-all border bg-slate-50 border-slate-100 text-slate-500 hover:border-primary/30 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400">Sakit</button>
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-3 block">Keterangan (Opsional)</label>
                        <textarea 
                          placeholder="Contoh: Sakit flu, Izin urusan keluarga..." 
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-zinc-800 dark:bg-zinc-800 min-h-[120px]"
                        ></textarea>
                      </div>

                      <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                        <i className="fi fi-rr-check"></i>
                        Submit Kehadiran
                      </button>
                    </div>
                  </div>

                  {/* Info Card */}
                  <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-primary p-6 text-white shadow-xl shadow-indigo-200 dark:shadow-none">
                    <h4 className="font-bold flex items-center gap-2 mb-2">
                      <i className="fi fi-rr-info"></i>
                      Info Penting
                    </h4>
                    <p className="text-xs text-indigo-100 leading-relaxed">
                      Batas waktu presensi masuk adalah pukul 08:30 WIB. Keterlambatan akan dicatat secara otomatis oleh sistem.
                    </p>
                  </div>
                </div>

                {/* Table Section */}
                <div className="lg:col-span-8 rounded-3xl bg-white shadow-xl shadow-slate-200/50 dark:bg-zinc-900 dark:shadow-none border border-slate-100 dark:border-zinc-800 overflow-hidden">
                  <div className="px-8 py-6 border-b border-slate-50 dark:border-zinc-800 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Riwayat Kehadiran</h3>
                    <button className="text-xs font-bold text-primary hover:underline">Lihat Semua</button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-50/50 dark:bg-zinc-800/50 text-slate-500 dark:text-zinc-400">
                        <tr>
                          <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">Tanggal</th>
                          <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">Masuk</th>
                          <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">Pulang</th>
                          <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">Status</th>
                          <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">Ket</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50 dark:divide-zinc-800">
                        {/* Contoh Baris Data */}
                        <tr className="group hover:bg-slate-50/30 dark:hover:bg-zinc-800/30 transition-colors">
                          <td className="px-8 py-5 font-bold text-slate-700 dark:text-white">1 Mar 2024</td>
                          <td className="px-8 py-5 text-slate-600 dark:text-slate-400 font-medium tabular-nums">08:00</td>
                          <td className="px-8 py-5 text-slate-600 dark:text-slate-400 font-medium tabular-nums">17:00</td>
                          <td className="px-8 py-5">
                            <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border bg-emerald-50 text-emerald-600 border-emerald-100">Hadir</span>
                          </td>
                          <td className="px-8 py-5 text-slate-400 italic text-xs">-</td>
                        </tr>
                        {/* Baris Izin */}
                        <tr className="group hover:bg-slate-50/30 dark:hover:bg-zinc-800/30 transition-colors">
                          <td className="px-8 py-5 font-bold text-slate-700 dark:text-white">27 Feb 2024</td>
                          <td className="px-8 py-5 text-slate-600 dark:text-slate-400 font-medium tabular-nums">-</td>
                          <td className="px-8 py-5 text-slate-600 dark:text-slate-400 font-medium tabular-nums">-</td>
                          <td className="px-8 py-5">
                            <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border bg-amber-50 text-amber-600 border-amber-100">Izin</span>
                          </td>
                          <td className="px-8 py-5 text-slate-400 italic text-xs">Urusan Keluarga</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default page