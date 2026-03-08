import React from 'react'

const Page = () => {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      {/* Catatan: Sesuai struktur di atas, main content berada di dalam wrapper 
        dengan padding kiri lg:pl-64 untuk menyisakan ruang bagi Sidebar.
      */}
      <div className="flex flex-1 flex-col lg:pl-64">
        
        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-7xl">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              
              {/* Header Section: Title & Action */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Proses Gaji Bulanan</h2>
                  <p className="text-slate-500 dark:text-slate-400 mt-1">Generate dan hitung gaji seluruh karyawan dalam satu klik.</p>
                </div>
                <div className="flex items-center gap-3">
                  <input 
                    className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white dark:bg-zinc-900 dark:border-zinc-800 text-sm font-bold outline-none focus:border-primary transition-all" 
                    type="month" 
                    defaultValue="2024-03" 
                  />
                  <button className="px-6 py-2.5 rounded-xl font-bold bg-blue-900 text-sm shadow-lg transition-all flex items-center gap-2 bg-primary text-white shadow-primary/20 hover:bg-primary/90">
                    <i className="fi fi-rr-play"></i>
                    Proses Gaji
                  </button>
                </div>
              </div>

              {/* Stats Grid: Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Total Pengeluaran Gaji</p>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white tabular-nums">Rp 33.400.000</h4>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Total Karyawan</p>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white">120 Orang</h4>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Status Periode</p>
                  <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-[10px] font-black border border-amber-100 uppercase tracking-widest inline-block">Draft</span>
                </div>
              </div>

              {/* Table Section */}
              <div className="rounded-3xl bg-white shadow-xl shadow-slate-200/50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50/50 dark:bg-zinc-800/50 text-slate-500 dark:text-zinc-400 text-[10px] font-black uppercase tracking-wider">
                      <tr>
                        <th className="px-8 py-4">Karyawan</th>
                        <th className="px-8 py-4">Gaji Pokok</th>
                        <th className="px-8 py-4">Uang Cuti</th>
                        <th className="px-8 py-4">Potongan</th>
                        <th className="px-8 py-4">Total Diterima</th>
                        <th className="px-8 py-4 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 dark:divide-zinc-800">
                      <tr className="group hover:bg-slate-50/30 dark:hover:bg-zinc-800/30 transition-colors">
                        <td className="px-8 py-5">
                          <div className="font-bold text-slate-700 dark:text-white group-hover:text-primary transition-colors">Ahmad Fauzi</div>
                          <div className="text-[10px] text-slate-400 font-medium">EMP001 • Manager IT</div>
                        </td>
                        <td className="px-8 py-5 font-semibold text-slate-600 dark:text-slate-400 tabular-nums">Rp 15.000.000</td>
                        <td className="px-8 py-5 font-semibold text-emerald-500 tabular-nums">+Rp 500.000</td>
                        <td className="px-8 py-5 font-semibold text-rose-500 tabular-nums">-Rp 200.000</td>
                        <td className="px-8 py-5">
                          <span className="text-sm font-black text-slate-900 dark:text-white tabular-nums">Rp 15.300.000</span>
                        </td>
                        <td className="px-8 py-5 text-right">
                          <button className="h-9 w-9 rounded-xl bg-slate-50 dark:bg-zinc-800 text-slate-400 hover:text-white hover:bg-primary transition-all flex items-center justify-center shadow-sm">
                            <i className="fa-solid fa-edit text-xs"></i>
                          </button>
                        </td>
                      </tr>
                      {/* Tambahkan baris lainnya di sini */}
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

export default Page