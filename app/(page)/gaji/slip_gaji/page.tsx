import React from 'react'
import Sidebar from '@/components/sidebar';

const Page = () => {
  return (
    <div className="flex min-h-screen justify-center  ml-36 p-6 bg-zinc-50 dark:bg-black">
     

      {/* Konten Utama */}
      <div className="flex flex-1 flex-col w-full pl-24 ">     
        {/* Header */}
     

        {/* Main Content */}
        <main className="flex-1 w-full  ">
          <div className="mx-auto max-w-7xl   ">
            <div className="space-y-12  animate-in fade-in slide-in-from-bottom-4 duration-700">
              {/* Title Section */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Riwayat Slip Gaji</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1">Unduh slip gaji bulanan Anda dengan mudah.</p>
              </div>

              {/* Table Card */}
              <div className="rounded-3xl bg-white  shadow-xl shadow-slate-200/50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 overflow-hidden">
                <div className="overflow-x-auto ">
                  <table className="w-full  text-left text-sm">
                    <thead className="bg-slate-50/50 dark:bg-zinc-800/50 text-slate-500 dark:text-zinc-400 text-[10px] font-black uppercase tracking-wider">
                      <tr>
                        <th className="px-8 py-4">Periode</th>
                        <th className="px-8 py-4">Total Gaji Netto</th>
                        <th className="px-8 py-4">Tanggal Pembayaran</th>
                        <th className="px-8 py-4">Status</th>
                        <th className="px-8 py-4 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 dark:divide-zinc-800 text-black">
                      {/* Row 1 */}
                      <tr className="group hover:bg-slate-50/30 dark:hover:bg-zinc-800/30 transition-colors">
                        <td className="px-8 py-5">
                          <div className="font-bold text-slate-700 dark:text-white tabular-nums">Maret 2024</div>
                        </td>
                        <td className="px-8 py-5">
                          <span className="text-sm font-black text-[#004d73] tabular-nums">Rp 15.300.000</span>
                        </td>
                        <td className="px-8 py-5 text-slate-500 dark:text-slate-400 font-medium tabular-nums">2024-03-25</td>
                        <td className="px-8 py-5">
                          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest border border-emerald-100">Paid</span>
                        </td>
                        <td className="px-8 py-5 text-right flex justify-end gap-2">
                          <button className="h-9 w-9 rounded-xl bg-slate-50 dark:bg-zinc-800 text-slate-400 hover:text-white hover:bg-[#004d73] transition-all flex items-center justify-center shadow-sm">
                            <i className="fa-solid fa-eye text-xs"></i>
                          </button>
                          <button className="h-9 w-9 rounded-xl bg-slate-50 dark:bg-zinc-800 text-slate-400 hover:text-white hover:bg-cyan-500 transition-all flex items-center justify-center shadow-sm">
                            <i className="fa-solid fa-download text-xs"></i>
                          </button>
                        </td>
                      </tr>

                      {/* Row 2 */}
                      <tr className="group hover:bg-slate-50/30 dark:hover:bg-zinc-800/30 transition-colors">
                        <td className="px-8 py-5">
                          <div className="font-bold text-slate-700 dark:text-white tabular-nums">Februari 2024</div>
                        </td>
                        <td className="px-8 py-5">
                          <span className="text-sm font-black text-[#004d73] tabular-nums">Rp 14.800.000</span>
                        </td>
                        <td className="px-8 py-5 text-slate-500 dark:text-slate-400 font-medium tabular-nums">2024-02-25</td>
                        <td className="px-8 py-5">
                          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest border border-emerald-100">Paid</span>
                        </td>
                        <td className="px-8 py-5 text-right flex justify-end gap-2">
                          <button className="h-9 w-9 rounded-xl bg-slate-50 dark:bg-zinc-800 text-slate-400 hover:text-white hover:bg-[#004d73] transition-all flex items-center justify-center shadow-sm">
                            <i className="fa-solid fa-eye text-xs"></i>
                          </button>
                          <button className="h-9 w-9 rounded-xl bg-slate-50 dark:bg-zinc-800 text-slate-400 hover:text-white hover:bg-cyan-500 transition-all flex items-center justify-center shadow-sm">
                            <i className="fa-solid fa-download text-xs"></i>
                          </button>
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

export default Page