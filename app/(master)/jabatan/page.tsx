import React from 'react';
import Sidebar from '@/components/sidebar';

const JabatanPage = () => {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      {/* Sidebar - Hidden on mobile, shown on LG */}
     

      <div className="flex flex-1 flex-col">
        {/* Header Section */}
       

        <main className="flex-1 p-6">
          <div className="mx-auto max-w-7xl">
            <div className="space-y-8">
              {/* Title Section */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Management Jabatan</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1">Configure positions and salary structures.</p>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
                {/* Form Tambah Jabatan (Left Column) */}
                <div className="lg:col-span-4 rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 dark:bg-zinc-900 dark:shadow-none border border-slate-100 dark:border-zinc-800 h-fit lg:sticky lg:top-24">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">➕</div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Tambah Jabatan</h2>
                  </div>
                  <form className="space-y-5">
                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">Nama Jabatan</label>
                      <input type="text" placeholder="Contoh: Manager IT" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-zinc-700 dark:bg-zinc-800" required />
                    </div>
                    
                    <div className="relative">
                      <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">Pilih Divisi</label>
                      <div className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-zinc-700 dark:bg-zinc-800 flex justify-between items-center group text-slate-400">
                        <span>Pilih Divisi</span>
                        <span className="group-hover:text-primary transition-colors text-[10px]">▼</span>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">Gaji Pokok</label>
                      <div className="relative group">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400 group-focus-within:text-primary transition-colors pointer-events-none">Rp</span>
                        <input type="number" placeholder="0" className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 py-3 text-sm font-bold outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-zinc-700 dark:bg-zinc-800" required />
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button type="submit" className="flex-1 rounded-xl bg-blue-950 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30 active:scale-[0.98] ">
                        Simpan
                      </button>
                    </div>
                  </form>
                </div>

                {/* Data Table Jabatan (Right Column) */}
                <div className="lg:col-span-8 rounded-3xl bg-white shadow-xl shadow-slate-200/50 dark:bg-zinc-900 dark:shadow-none border border-slate-100 dark:border-zinc-800 overflow-hidden">
                  <div className="px-8 py-6 border-b border-slate-50 dark:border-zinc-800 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Data Jabatan</h2>
                    <div className="flex items-center gap-2 text-xs font-bold bg-tertiary/10 text-tertiary px-4 py-1.5 rounded-full shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-tertiary animate-pulse"></span>
                      2 Items Total
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-50/50 dark:bg-zinc-800/50 text-slate-500 dark:text-zinc-400 border-b border-slate-50 dark:border-zinc-800">
                        <tr>
                          <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">No</th>
                          <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">Jabatan</th>
                          <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">Divisi</th>
                          <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">Gaji Pokok</th>
                          <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px] text-right">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50 dark:divide-zinc-800">
                        {/* Baris 1 */}
                        <tr className="group hover:bg-slate-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                          <td className="px-8 py-5 font-bold text-slate-400">1</td>
                          <td className="px-8 py-5 font-bold text-slate-700 dark:text-white group-hover:text-primary transition-colors">STAFF</td>
                          <td className="px-8 py-5">
                            <span className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-zinc-800 text-[11px] font-bold text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-zinc-700 group-hover:bg-white dark:group-hover:bg-primary/20 transition-all">
                              INFORMATION TECHNOLOGY
                            </span>
                          </td>
                          <td className="px-8 py-5 text-emerald-600 dark:text-emerald-400 font-black tabular-nums">Rp 3.000.000</td>
                          <td className="px-8 py-5 text-right">
                            <div className="flex justify-end gap-3 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                              <button className="h-9 w-9 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary rounded-xl transition-all shadow-sm" title="Edit">✏️</button>
                              <button className="h-9 w-9 flex items-center justify-center text-slate-400 hover:text-white hover:bg-secondary rounded-xl transition-all shadow-sm" title="Hapus">🗑️</button>
                            </div>
                          </td>
                        </tr>
                        {/* Baris 2 */}
                        <tr className="group hover:bg-slate-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                          <td className="px-8 py-5 font-bold text-slate-400">2</td>
                          <td className="px-8 py-5 font-bold text-slate-700 dark:text-white group-hover:text-primary transition-colors">HEAD OF</td>
                          <td className="px-8 py-5">
                            <span className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-zinc-800 text-[11px] font-bold text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-zinc-700 group-hover:bg-white dark:group-hover:bg-primary/20 transition-all">
                              HRD
                            </span>
                          </td> 
                          <td className="px-8 py-5 text-emerald-600 dark:text-emerald-400 font-black tabular-nums">Rp 5.000.000</td>
                          <td className="px-8 py-5 text-right">
                            <div className="flex justify-end gap-3 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                              <button className="h-9 w-9 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary rounded-xl transition-all shadow-sm" title="Edit">✏️</button>
                              <button className="h-9 w-9 flex items-center justify-center text-slate-400 hover:text-white hover:bg-secondary rounded-xl transition-all shadow-sm" title="Hapus">🗑️</button>
                            </div>
                          </td>
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
  );
};

export default JabatanPage;