"use client";

import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export default function UserPage() {
  const [userList, setUserList] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("access_token");
  const fetchUser = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://payroll.politekniklp3i-tasikmalaya.ac.id/api/master-user",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        },
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Gagal mengambil data user");
      setUserList(data.data || data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUser();
    }
  }, [token]);

  return (
    <div className="space-y-8">
      {/* Header Title Section */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          Management User
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Control system access and user permissions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
        {/* Left Side: Form Tambah User */}
        <div className="lg:col-span-4 rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 dark:bg-zinc-900 dark:shadow-none border border-slate-100 dark:border-zinc-800 h-fit lg:sticky lg:top-24">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
              <i className="fa-solid fa-user-plus"></i>
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Tambah User
            </h2>
          </div>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                Nama
              </label>
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-zinc-700 dark:bg-zinc-800"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-zinc-700 dark:bg-zinc-800"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-zinc-700 dark:bg-zinc-800"
                required
              />
            </div>

            {/* Custom Dropdown Role - Disesuaikan dengan Foto */}
            <div className="mb-4">
              <label
                htmlFor="role"
                className="font-bold text-gray-800 dark:text-gray-300 "
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                className="border border-gray-200 dark:bg-zinc-800 text-gray-500 rounded-xl py-2 px-4 w-full my-1"
              >
                <option value="">Pilih Role</option>
                <option value="">Admin</option>
                <option value="">User</option>
              </select>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 rounded-xl bg-blue-500 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-600 hover:shadow-blue-500/30 active:scale-[0.98]"
              >
                Simpan User
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Data Table */}
        <div className="lg:col-span-8 rounded-3xl bg-white shadow-xl shadow-slate-200/50 dark:bg-zinc-900 dark:shadow-none border border-slate-100 dark:border-zinc-800 overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-50 dark:border-zinc-800 flex justify-between items-center bg-white dark:bg-zinc-900">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Data User
            </h2>
            <div className="flex items-center gap-2 text-xs font-bold bg-tertiary/10 text-tertiary px-4 py-1.5 rounded-full shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-tertiary animate-pulse"></span>
              3 Items Total
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50/50 dark:bg-zinc-800/50 text-slate-500 dark:text-zinc-400 border-b border-slate-50 dark:border-zinc-800">
                <tr>
                  <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">
                    No
                  </th>
                  <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">
                    Nama
                  </th>
                  <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">
                    Email
                  </th>
                  <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">
                    Role
                  </th>
                  <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px] text-right">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-zinc-800">
                {userList.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-8 py-16 text-center text-slate-400 italic">
                      {loading ? "Menarik data..." : "No users found."}
                    </td>
                  </tr>
                ) : (
                  userList.map((item, index) => (
                    <tr key={item.id} className="group hover:bg-slate-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                      <td className="px-8 py-5 font-bold text-slate-400">{index + 1}</td>
                      <td className="px-8 py-5 font-bold text-slate-700 dark:text-white group-hover:text-primary transition-colors">
                        {item.name}
                      </td>
                      <td className="px-8 py-5 text-slate-500 dark:text-slate-400">
                        {item.email}
                      </td>
                      <td className="px-8 py-5">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                          item.role === 'admin' 
                          ? 'bg-amber-100 text-amber-600 border-amber-200' 
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}>
                          {item.role}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <div className="flex justify-end gap-3 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          {/* <button
                            onClick={() => handleEdit(item)}
                            className="h-9 w-9 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary rounded-xl transition-all shadow-sm hover:shadow-primary/30"
                            title="Edit"
                          >
                            ✏️
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="h-9 w-9 flex items-center justify-center text-slate-400 hover:text-white hover:bg-secondary rounded-xl transition-all shadow-sm hover:shadow-secondary/30"
                            title="Hapus"
                          >
                            🗑️
                          </button> */}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

interface UserTableRowProps {
  no: string;
  nama: string;
  email: string;
  role: "admin" | "user";
}

function UserTableRow({ no, nama, email, role }: UserTableRowProps) {
  return (
    <tr className="group hover:bg-slate-50/50 dark:hover:bg-zinc-800/30 transition-colors">
      <td className="px-8 py-5 font-bold text-slate-400">{no}</td>
      <td className="px-8 py-5 font-bold text-slate-700 dark:text-white group-hover:text-primary transition-colors">
        {nama}
      </td>
      <td className="px-8 py-5 text-slate-500 dark:text-slate-400">{email}</td>
      <td className="px-8 py-5">
        <span
          className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
            role === "admin"
              ? "bg-amber-100 text-amber-600 border-amber-200"
              : "bg-slate-100 text-slate-600 border-slate-200"
          }`}
        >
          {role}
        </span>
      </td>
      <td className="px-8 py-5 text-right">
        <div className="flex justify-end gap-3 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <button
            className="h-9 w-9 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary rounded-xl transition-all shadow-sm hover:shadow-primary/30"
            title="Edit"
          >
            <i className="fi fi-rr-edit text-xs"></i>
          </button>
          <button
            className="h-9 w-9 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-500 rounded-xl transition-all shadow-sm"
            title="Hapus"
          >
            <i className="fi fi-rr-trash text-xs"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}
