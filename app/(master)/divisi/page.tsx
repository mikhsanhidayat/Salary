import React from 'react';
import Sidebar from '@/components/sidebar';

const Page = () => {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
     

      <div className="flex flex-1 flex-col">
        {/* Header Section */}
        

        {/* Main Content Section */}
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-7xl">
            <div className="space-y-8">
              {/* Title Section */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Management Divisi</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1">Configure and manage company departments.</p>
              </div>

              {/* Grid Layout: Form & Table */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
                
                {/* Form Tambah Divisi */}
                <div className="lg:col-span-4 rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 dark:bg-zinc-900 dark:shadow-none border border-slate-100 dark:border-zinc-800 h-fit lg:sticky lg:top-24">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-[#004d73]/10 flex items-center justify-center text-[#004d73]">➕</div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Tambah Divisi</h2>
                  </div>
                  <form className="space-y-5">
                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">Nama Divisi</label>
                      <input 
                        placeholder="Contoh: IT Support" 
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-[#004d73] focus:ring-4 focus:ring-[#004d73]/10 dark:border-zinc-700 dark:bg-zinc-800 text-black dark:text-white" 
                        required 
                        type="text" 
                      />
                    </div>
                    <div className="flex gap-3 pt-2">
                      <button type="submit" className="flex-1 rounded-xl bg-[#004d73] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-[#004d73]/20 transition-all hover:bg-[#003a57] hover:shadow-[#004d73]/30 active:scale-[0.98]">
                        Simpan
                      </button>
                    </div>
                  </form>
                </div>

                {/* Data Table Divisi */}
                <div className="lg:col-span-8 rounded-3xl bg-white shadow-xl shadow-slate-200/50 dark:bg-zinc-900 dark:shadow-none border border-slate-100 dark:border-zinc-800 overflow-hidden">
                  <div className="px-8 py-6 border-b border-slate-50 dark:border-zinc-800 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Data Divisi</h2>
                    <div className="flex items-center gap-2 text-xs font-bold bg-[#22d3ee]/10 text-[#22d3ee] px-4 py-1.5 rounded-full shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#22d3ee] animate-pulse"></span>
                      3 Items Total
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-50/50 dark:bg-zinc-800/50 text-slate-500 dark:text-zinc-400 border-b border-slate-50 dark:border-zinc-800">
                        <tr>
                          <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">No</th>
                          <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">Nama Divisi</th>
                          <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px] text-right">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50 dark:divide-zinc-800">
                        <TableRow id="1" name="INFORMATION TECHNOLOGY" />
                        <TableRow id="2" name="EDUCATION" />
                        <TableRow id="3" name="HRD" />
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

/* Helper Component untuk baris tabel agar kode lebih bersih */
function TableRow({ id, name }: { id: string; name: string }) {
  return (
    <tr className="group hover:bg-slate-50/50 dark:hover:bg-zinc-800/30 transition-colors">
      <td className="px-8 py-5 font-bold text-slate-400">{id}</td>
      <td className="px-8 py-5 font-semibold text-slate-700 dark:text-slate-300 group-hover:text-[#004d73] transition-colors lowercase first-letter:uppercase uppercase">
        {name}
      </td>
      <td className="px-8 py-5 text-right">
        <div className="flex justify-end gap-3 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <button className="h-9 w-9 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#004d73] rounded-xl transition-all shadow-sm" title="Edit">
            ✏️
          </button>
          <button className="h-9 w-9 flex items-center justify-center text-slate-400 hover:text-white hover:bg-rose-500 rounded-xl transition-all shadow-sm" title="Hapus">
            🗑️
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Page;