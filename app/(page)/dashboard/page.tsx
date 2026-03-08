import React from "react";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      {/* SIDEBAR - Hidden on mobile, visible on LG screens */}
      

      {/* MAIN CONTENT AREA */}
      <div className="flex flex-1 flex-col lg:pl-64">
        {/* HEADER */}
        

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-7xl">
            <div className="space-y-8">
              {/* Welcome Section */}
              <div>
                
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Here's what's happening with your payroll system today.
                </p>
              </div>

              {/* STATS CARDS */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Total Karyawan */}
                <div className="group rounded-3xl bg-white p-6 shadow-sm border border-slate-100 dark:bg-zinc-900 dark:border-zinc-800 transition-all hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">👥</span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20">+12%</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Total Karyawan</p>
                  <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">124</p>
                </div>

                {/* Divisi */}
                <div className="group rounded-3xl bg-white p-6 shadow-sm border border-slate-100 dark:bg-zinc-900 dark:border-zinc-800 transition-all hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">🏢</span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 dark:bg-zinc-800">Stable</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Divisi</p>
                  <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">8</p>
                </div>

                {/* Payroll */}
                <div className="group rounded-3xl bg-white p-6 shadow-sm border border-slate-100 dark:bg-zinc-900 dark:border-zinc-800 transition-all hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">💰</span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20">+5%</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Payroll Bulan Ini</p>
                  <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">Rp 450M</p>
                </div>

                {/* Pending Approval */}
                <div className="group rounded-3xl bg-white p-6 shadow-sm border border-slate-100 dark:bg-zinc-900 dark:border-zinc-800 transition-all hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">⏳</span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-50 text-rose-600 dark:bg-rose-900/20">-2</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Pending Approval</p>
                  <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">12</p>
                </div>
              </div>

              {/* LOWER SECTION: Activities & Reports */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Recent Activities */}
                <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100 dark:bg-zinc-900 dark:border-zinc-800">
                  <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-tertiary"></span>Recent Activities
                  </h3>
                  <div className="space-y-5">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-center gap-4 group cursor-pointer">
                        <div className="h-12 w-12 rounded-2xl bg-primary/5 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform font-bold">
                          📝
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                            Updated Divisi "IT Support"
                          </p>
                          <p className="text-xs font-medium text-slate-400">{item * 2} hours ago</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Placeholder / Empty State */}
                <div className="rounded-3xl bg-slate-50 p-8 border-2 border-dashed border-slate-200 dark:bg-zinc-900/50 dark:border-zinc-800 flex flex-col items-center justify-center text-center">
                  <div className="h-16 w-16 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center shadow-sm mb-4">
                    🚀
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white">New Reports Coming Soon</h4>
                  <p className="text-slate-400 text-sm mt-1">
                    We're building advanced analytics for your payroll.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}