import React from "react";
import Sidebar from "@/components/sidebar";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white">
      {/* Sidebar tetap di kiri */}
      <Sidebar />

      <div className="flex flex-1 flex-col">
        {/* Header Section */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md px-8 shadow-sm">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-white tracking-tight">
              Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-white leading-tight">
                  Administrator
                </p>
                <p className="text-xs font-medium text-zinc-500">
                  Payroll Management
                </p>
              </div>
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#22d3ee] font-bold shadow-inner">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Section */}
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-7xl">
            <div className="space-y-8">
              {/* Welcome Message */}
              <div>
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  Welcome back, Admin!
                </h2>
                <p className="text-zinc-400 mt-1">
                  Here's what's happening with your payroll system today.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="group relative cursor-pointer rounded-3xl border border-white/5 bg-[#161616] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_30px_60px_-15px_rgba(255,255,255,0.4)]">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-4xl filter saturate-50 transition-all duration-500 group-hover:saturate-100">
                      👥
                    </div>

                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-400">
                      +12%
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-zinc-500 transition-colors duration-500 group-hover:text-zinc-300">
                      Total Karyawan
                    </p>
                    <p className="mt-1 origin-left text-3xl font-black text-white transition-transform duration-500 group-hover:scale-105">
                      124
                    </p>
                  </div>
                </div>
                <StatCard
                  emoji="🏢"
                  label="Divisi"
                  value="8"
                  trend="Stable"
                  trendColor="text-zinc-400"
                  trendBg="bg-white/5"
                />
                <StatCard
                  emoji="💰"
                  label="Payroll Bulan Ini"
                  value="Rp 450M"
                  trend="+5%"
                  trendColor="text-emerald-400"
                  trendBg="bg-emerald-500/10"
                />
                <StatCard
                  emoji="⏳"
                  label="Pending Approval"
                  value="12"
                  trend="-2"
                  trendColor="text-rose-400"
                  trendBg="bg-rose-500/10"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Recent Activities */}
                <div className="rounded-3xl bg-[#161616] p-8 shadow-lg border border-white/5">
                  <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#22d3ee]"></span>
                    Recent Activities
                  </h3>
                  <div className="space-y-5">
                    <ActivityItem
                      text="Updated Divisi 'IT Support'"
                      time="2 hours ago"
                    />
                    <ActivityItem
                      text="Updated Divisi 'IT Support'"
                      time="2 hours ago"
                    />
                    <ActivityItem
                      text="Updated Divisi 'IT Support'"
                      time="2 hours ago"
                    />
                  </div>
                </div>

                {/* Coming Soon Section */}
                <div className="rounded-3xl bg-[#0f0f0f] p-8 border-2 border-dashed border-white/5 flex flex-col items-center justify-center text-center">
                  <div className="h-16 w-16 bg-[#161616] rounded-full flex items-center justify-center shadow-sm mb-4 text-2xl border border-white/5">
                    🚀
                  </div>
                  <h4 className="font-bold text-white">
                    New Reports Coming Soon
                  </h4>
                  <p className="text-zinc-500 text-sm mt-1">
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
};

/* Helper Components */

function StatCard({ emoji, label, value, trend, trendColor, trendBg }: any) {
  return (
    <div className="group rounded-3xl bg-[#161616] p-6 shadow-md border border-white/5 transition-all hover:border-[#22d3ee]/30 hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl grayscale group-hover:grayscale-0 transition-all opacity-80">
          {emoji}
        </span>
        <span
          className={`text-[10px] font-bold px-3 py-1 rounded-full ${trendBg} ${trendColor}`}
        >
          {trend}
        </span>
      </div>
      <p className="text-sm font-semibold text-zinc-500">{label}</p>
      <p className="text-2xl font-black text-white mt-1">{value}</p>
    </div>
  );
}

function ActivityItem({ text, time }: { text: string; time: string }) {
  return (
    <div className="flex items-center gap-4 group cursor-pointer">
      <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-[#22d3ee] group-hover:bg-[#22d3ee]/10 transition-all text-xl">
        <i className="fa-solid fa-file-lines text-sm"></i>
      </div>
      <div>
        <p className="text-sm font-bold text-white group-hover:text-[#22d3ee] transition-colors">
          {text}
        </p>
        <p className="text-xs font-medium text-zinc-500">{time}</p>
      </div>
    </div>
  );
}

export default DashboardPage;
