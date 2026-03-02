"use client";

import React, { useState } from "react";

export default function KaryawanPage() {
  return (
    <div className="space-y-8">
      {/* Header Title Section */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          Management Karyawan
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Manage employee records and information.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
        {/* Left Side: Form Tambah Karyawan */}
        <div className="lg:col-span-4 rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 dark:bg-zinc-900 dark:shadow-none border border-slate-100 dark:border-zinc-800 h-fit lg:sticky lg:top-24">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[#004d73]/10 flex items-center justify-center text-[#004d73]">
              <i className="fi fi-rr-plus-small text-xl"></i>
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Tambah Karyawan
            </h2>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                  NIK
                </label>
                <input
                  type="text"
                  placeholder="NIK"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-[#004d73] focus:ring-4 focus:ring-[#004d73]/10 dark:border-zinc-700 dark:bg-zinc-800"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                  Nama
                </label>
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-[#004d73] focus:ring-4 focus:ring-[#004d73]/10 dark:border-zinc-700 dark:bg-zinc-800"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                type="email"
                placeholder="email@company.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-[#004d73] focus:ring-4 focus:ring-[#004d73]/10 dark:border-zinc-700 dark:bg-zinc-800"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                  Tempat Lahir
                </label>
                <input
                  type="text"
                  placeholder="Kota"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-[#004d73] focus:ring-4 focus:ring-[#004d73]/10 dark:border-zinc-700 dark:bg-zinc-800"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-[#004d73] focus:ring-4 focus:ring-[#004d73]/10 dark:border-zinc-700 dark:bg-zinc-800"
                />
              </div>
            </div>

            {/* alamat */}
            <div>
                <label className="  block text-sm font-bold text-slate-700 dark:text-slate-300"> 
                    Alamat
                </label>
                <input
                    type="text"
                    placeholder="Alamat Lengkap"
                    className="w-full pb-12 rounded-xl border border-slate-200 bg-slate-50 h-24 text-sm outline-none transition-all focus:border-[#004d73] focus:ring-4 focus:ring-[#004d73]/10 dark:border-zinc-700 dark:bg-zinc-800"
                />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                Jabatan
              </label>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-[#004d73] focus:ring-4 focus:ring-[#004d73]/10 dark:border-zinc-700 dark:bg-zinc-800 appearance-none">
                <option value="">Pilih Jabatan</option>
                <option value="manager">Manager IT</option>
                <option value="hr">HR Specialist</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                Status Aktif
              </label>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-[#004d73] focus:ring-4 focus:ring-[#004d73]/10 dark:border-zinc-700 dark:bg-zinc-800">
                <option value="true">Aktif</option>
                <option value="false">Tidak Aktif</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#004d73] px-4 py-4 text-sm font-bold text-white shadow-lg shadow-[#004d73]/20 transition-all hover:bg-[#003d5c] active:scale-[0.98] mt-2"
            >
              Simpan Data Karyawan
            </button>
          </form>
        </div>

        {/* Right Side: Data Table */}
        <div className="lg:col-span-8 rounded-3xl bg-white shadow-xl shadow-slate-200/50 dark:bg-zinc-900 dark:shadow-none border border-slate-100 dark:border-zinc-800 overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-50 dark:border-zinc-800 flex justify-between items-center bg-white dark:bg-zinc-900">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Data Karyawan
            </h2>
            <div className="flex items-center gap-2 text-xs font-bold bg-[#22d3ee]/10 text-[#22d3ee] px-4 py-1.5 rounded-full shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22d3ee] animate-pulse"></span>
              2 Items Total
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50/50 dark:bg-zinc-800/50 text-slate-500 dark:text-zinc-400 border-b border-slate-50 dark:border-zinc-800">
                <tr>
                  <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">No</th>
                  <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">Nama</th>
                  <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">Jabatan</th>
                  <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">Status</th>
                  <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px] text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-zinc-800">
                <TableRow 
                  no="1" 
                  nama="Ahmad Fauzi" 
                  jabatan="Manager IT" 
                  status="Aktif" 
                />
                <TableRow 
                  no="2" 
                  nama="Siti Aminah" 
                  jabatan="HR Specialist" 
                  status="Aktif" 
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableRow({ no, nama, jabatan, status }: { no: string; nama: string; jabatan: string; status: string }) {
  return (
    <tr className="group hover:bg-slate-50/50 dark:hover:bg-zinc-800/30 transition-colors">
      <td className="px-8 py-5 font-bold text-slate-400">{no}</td>
      <td className="px-8 py-5 font-bold text-slate-700 dark:text-white group-hover:text-[#004d73] transition-colors">
        {nama}
      </td>
      <td className="px-8 py-5">
        <span className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-zinc-800 text-[11px] font-bold text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-zinc-700 group-hover:bg-white dark:group-hover:bg-[#004d73]/20 transition-all">
          {jabatan}
        </span>
      </td>
      <td className="px-8 py-5">
        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-[10px] font-black uppercase tracking-widest border border-emerald-200">
          {status}
        </span>
      </td>
      <td className="px-8 py-5 text-right">
        <div className="flex justify-end gap-3 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <button className="h-9 w-9 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#22d3ee] rounded-xl transition-all shadow-sm" title="Detail">
            <i className="fi fi-rr-info"></i>
          </button>
          <button className="h-9 w-9 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#004d73] rounded-xl transition-all shadow-sm" title="Edit">
            <i className="fi fi-rr-edit"></i>
          </button>
          <button className="h-9 w-9 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-500 rounded-xl transition-all shadow-sm" title="Hapus">
            <i className="fi fi-rr-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}