import React from 'react'

const page = () => {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      {/* Sidebar Placeholder - Offset konten utama */}
      <div className="flex flex-1 flex-col lg:pl-64">
        
      
        {/* Main Content Area */}
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              
              {/* Title Section */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Form Pengajuan Cuti</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1">Silahkan lengkapi data di bawah ini untuk mengajukan cuti.</p>
              </div>

              {/* Grid Layout: Form & Info */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Form Section (Left - Span 8) */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 dark:bg-zinc-900 dark:shadow-none border border-slate-100 dark:border-zinc-800">
                    <form className="space-y-6">
                      
                      {/* Jenis Cuti Selection */}
                      <div>
                        <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-4 block">Pilih Jenis Cuti</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          <button type="button" className="flex flex-col items-center gap-3 p-4 rounded-2xl border transition-all bg-slate-50 border-slate-100 text-slate-500 hover:border-primary/30 dark:bg-zinc-800 dark:border-zinc-700">
                            <i className="fi fi-rr-calendar-check text-lg text-emerald-500"></i>
                            <span className="text-[10px] font-bold text-center leading-tight">Cuti Tahunan</span>
                          </button>
                          <button type="button" className="flex flex-col items-center gap-3 p-4 rounded-2xl border transition-all bg-slate-50 border-slate-100 text-slate-500 hover:border-primary/30 dark:bg-zinc-800 dark:border-zinc-700">
                            <i className="fi fi-rr-heart text-lg text-rose-500"></i>
                            <span className="text-[10px] font-bold text-center leading-tight">Cuti Sakit</span>
                          </button>
                          <button type="button" className="flex flex-col items-center gap-3 p-4 rounded-2xl border transition-all bg-slate-50 border-slate-100 text-slate-500 hover:border-primary/30 dark:bg-zinc-800 dark:border-zinc-700">
                            <i className="fi fi-rr-exclamation text-lg text-amber-500"></i>
                            <span className="text-[10px] font-bold text-center leading-tight">Alasan Penting</span>
                          </button>
                          <button type="button" className="flex flex-col items-center gap-3 p-4 rounded-2xl border transition-all bg-slate-50 border-slate-100 text-slate-500 hover:border-primary/30 dark:bg-zinc-800 dark:border-zinc-700">
                            <i className="fi fi-rr-users-alt text-lg text-indigo-500"></i>
                            <span className="text-[10px] font-bold text-center leading-tight">Cuti Bersama</span>
                          </button>
                        </div>
                      </div>

                      {/* Date Inputs */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">Tanggal Mulai</label>
                          <input 
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-zinc-700 dark:bg-zinc-800" 
                            type="date" 
                            required 
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">Tanggal Berakhir</label>
                          <input 
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-zinc-700 dark:bg-zinc-800" 
                            type="date" 
                            required 
                          />
                        </div>
                      </div>

                      {/* Reason Textarea */}
                      <div>
                        <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">Alasan Cuti</label>
                        <textarea 
                          placeholder="Berikan alasan yang jelas untuk pengajuan cuti Anda..." 
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-zinc-700 dark:bg-zinc-800 min-h-[150px]" 
                          required
                        ></textarea>
                      </div>

                      {/* Upload Section */}
                      <div className="p-6 border-2 border-dashed border-slate-200 dark:border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-3 text-slate-400 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-all cursor-pointer">
                        <i className="fi fi-rr-cloud-upload text-2xl"></i>
                        <div className="text-center">
                          <p className="text-xs font-bold text-slate-600 dark:text-slate-300">Upload Dokumen Pendukung (Opsional)</p>
                          <p className="text-[10px]">PDF, JPG, atau PNG (Maks 2MB)</p>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4">
                        <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                          <i className="fi fi-rr-paper-plane"></i>
                          Kirim Pengajuan
                        </button>
                      </div>

                    </form>
                  </div>
                </div>

                {/* Sidebar Info Section (Right - Span 4) */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl shadow-slate-200 dark:shadow-none relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/5 blur-xl"></div>
                    <h3 className="text-lg font-bold mb-6 relative z-10 flex items-center gap-2">
                      <i className="fi fi-rr-info text-primary"></i>
                      Ketentuan Cuti
                    </h3>
                    <ul className="space-y-4 text-xs text-slate-300 relative z-10">
                      <li className="flex gap-3">
                        <span className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] shrink-0 font-bold">1</span>
                        <span>Pengajuan cuti dilakukan minimal 3 hari sebelum tanggal mulai.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] shrink-0 font-bold">2</span>
                        <span>Cuti sakit wajib melampirkan surat keterangan dokter.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] shrink-0 font-bold">3</span>
                        <span>Persetujuan cuti bergantung pada kebijakan manajer divisi.</span>
                      </li>
                    </ul>
                    <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Butuh Bantuan?</p>
                      <p className="text-xs">Hubungi HRD melalui email hrd@company.com</p>
                    </div>
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