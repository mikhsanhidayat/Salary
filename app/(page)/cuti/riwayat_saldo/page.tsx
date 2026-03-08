import React from 'react'

const page = () => {
  return (
    
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      {/* Sidebar Spacer untuk Layout (lg:pl-64) */}
      <div className="flex flex-1 flex-col lg:pl-64">
        
        {/* Header Section */}
  

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-7xl">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              
              {/* Title Section */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Data & Saldo Cuti</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1">Informasi kuota dan riwayat pengajuan cuti Anda.</p>
              </div>

              {/* Stats Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Total Cuti Card */}
                <div className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/50 dark:bg-zinc-900 dark:shadow-none border border-slate-100 dark:border-zinc-800 transition-all hover:scale-[1.02]">
                  <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-indigo-50 opacity-50 blur-2xl transition-transform group-hover:scale-125"></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Total Cuti</p>
                      <div className="flex items-baseline gap-2">
                        <h4 className="text-3xl font-black text-slate-900 dark:text-white tabular-nums">12</h4>
                        <span className="text-[10px] font-bold text-slate-500">Hari / Tahun</span>
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl">
                      <i className="fa-solid fa-calendar-plus"></i>
                    </div>
                  </div>
                </div>

                {/* Cuti Diambil Card */}
                <div className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/50 dark:bg-zinc-900 dark:shadow-none border border-slate-100 dark:border-zinc-800 transition-all hover:scale-[1.02]">
                  <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-rose-50 opacity-50 blur-2xl transition-transform group-hover:scale-125"></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Cuti Diambil</p>
                      <div className="flex items-baseline gap-2">
                        <h4 className="text-3xl font-black text-slate-900 dark:text-white tabular-nums">4</h4>
                        <span className="text-[10px] font-bold text-slate-500">Hari</span>
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-xl">
                      <i className="fa-solid fa-calendar-minus"></i>
                    </div>
                  </div>
                </div>

                {/* Sisa Cuti Card */}
                <div className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/50 dark:bg-zinc-900 dark:shadow-none border border-slate-100 dark:border-zinc-800 transition-all hover:scale-[1.02]">
                  <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-emerald-50 opacity-50 blur-2xl transition-transform group-hover:scale-125"></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Sisa Cuti</p>
                      <div className="flex items-baseline gap-2">
                        <h4 className="text-3xl font-black text-slate-900 dark:text-white tabular-nums">8</h4>
                        <span className="text-[10px] font-bold text-slate-500">Hari Tersisa</span>
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl">
                      {/* icon jam */}
                      <i className="fa-solid fa-clock"></i>
                    </div>
                  </div>
                </div>

              </div>

              {/* History Table Section */}
              <div className="rounded-3xl bg-white shadow-xl shadow-slate-200/50 dark:bg-zinc-900 dark:shadow-none border border-slate-100 dark:border-zinc-800 overflow-hidden">
                <div className="px-8 py-6 border-b border-slate-50 dark:border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Riwayat Pengajuan</h3>
                  
                  {/* Status Filters */}
                  <div className="flex bg-slate-100 dark:bg-zinc-800 p-1 rounded-xl">
                    <button className="px-4 py-1.5 rounded-lg text-[10px] font-bold transition-all bg-white dark:bg-zinc-700 text-slate-900 dark:text-white shadow-sm">Semua</button>
                    <button className="px-4 py-1.5 rounded-lg text-[10px] font-bold transition-all text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Pending</button>
                    <button className="px-4 py-1.5 rounded-lg text-[10px] font-bold transition-all text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Approved</button>
                    <button className="px-4 py-1.5 rounded-lg text-[10px] font-bold transition-all text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Rejected</button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50/50 dark:bg-zinc-800/50 text-slate-500 dark:text-zinc-400">
                      <tr>
                        <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">Jenis Cuti</th>
                        <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">Tanggal</th>
                        <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">Durasi</th>
                        <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">Alasan</th>
                        <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px] text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 dark:divide-zinc-800">
                      
                      {/* Row 1 - Approved */}
                      <tr className="group hover:bg-slate-50/30 dark:hover:bg-zinc-800/30 transition-colors">
                        <td className="px-8 py-5">
                          <span className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-zinc-800 text-[11px] font-bold text-slate-700 dark:text-slate-400 border border-slate-200/50 dark:border-zinc-700">Tahunan</span>
                        </td>
                        <td className="px-8 py-5 font-semibold text-slate-600 dark:text-slate-300 tabular-nums">15 Feb - 17 Feb 2024</td>
                        <td className="px-8 py-5 text-slate-500 dark:text-slate-400 font-bold tabular-nums">3 Hari</td>
                        <td className="px-8 py-5 text-slate-500 dark:text-slate-400 text-xs italic truncate max-w-[200px]">Acara Keluarga</td>
                        <td className="px-8 py-5 text-right">
                          <span className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border bg-emerald-50 text-emerald-600 border-emerald-100">Approved</span>
                        </td>
                      </tr>

                      {/* Row 2 - Pending */}
                      <tr className="group hover:bg-slate-50/30 dark:hover:bg-zinc-800/30 transition-colors">
                        <td className="px-8 py-5">
                          <span className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-zinc-800 text-[11px] font-bold text-slate-700 dark:text-slate-400 border border-slate-200/50 dark:border-zinc-700">Tahunan</span>
                        </td>
                        <td className="px-8 py-5 font-semibold text-slate-600 dark:text-slate-300 tabular-nums">10 Mar - 12 Mar 2024</td>
                        <td className="px-8 py-5 text-slate-500 dark:text-slate-400 font-bold tabular-nums">3 Hari</td>
                        <td className="px-8 py-5 text-slate-500 dark:text-slate-400 text-xs italic truncate max-w-[200px]">Liburan Akhir Pekan</td>
                        <td className="px-8 py-5 text-right">
                          <span className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border bg-amber-50 text-amber-600 border-amber-100">Pending</span>
                        </td>
                      </tr>

                    </tbody>
                  </table>
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