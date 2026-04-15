"use client";

import { log } from "node:console";
import { useEffect, useState, useRef } from "react";




interface Jabatan {
  id: number;
  jabatan: string;
}

interface Karyawan {
  id: number;
  nik: string;
  nama: string;
  email: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  alamat: string;
  id_jabatan: number;
  status_aktif: boolean;
  jabatan?: Jabatan;
}

export default function KaryawanPage() {
  const [karyawanList, setKaryawanList] = useState<Karyawan[]>([]);
  const [loading, setLoading] = useState(false);
  const [jabatanList, setJabatanList] = useState<Jabatan[]>([]);
  const token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null;
    const [selectedKaryawan, setSelectedKaryawan] = useState<Karyawan | null>(null);

  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

    // Form states
  const [nik, setNik] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [idJabatan, setIdJabatan] = useState<string>("");
  const [statusAktif, setStatusAktif] = useState(true);
      // Searchable Select states
  const [searchJabatan, setSearchJabatan] = useState("");
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const fetchKaryawan = async () => {
    setLoading(true);
    const res = await fetch(
      "https://payroll.politekniklp3i-tasikmalaya.ac.id/api/karyawan",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      },
    );
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    setKaryawanList(data.data || data);
    setLoading(false);
  };

  const fetchJabatan = async () => {
    try {
      const res = await fetch(
        "https://payroll.politekniklp3i-tasikmalaya.ac.id/api/jabatan",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        },
      );
      const data = await res.json();

      if (res.ok) {
        setJabatanList(data.data || data);
      }
    } catch (err: unknown) {
      console.error("Fetch Jabatan Error:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const url = editingId
      ? `https://payroll.politekniklp3i-tasikmalaya.ac.id/api/karyawan/${editingId}`
      : "https://payroll.politekniklp3i-tasikmalaya.ac.id/api/karyawan";
    
    const method = editingId ? "PATCH" : "POST";

    try {
      const res = await fetch(url, {
        method: method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          nik,
          nama,
          email,
          tempat_lahir: tempatLahir,
          tanggal_lahir: tanggalLahir,
          alamat,
          id_jabatan: parseInt(idJabatan),
          status_aktif: statusAktif,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || `Gagal ${editingId ? 'mengupdate' : 'menambahkan'} karyawan`);
      }

      resetForm();
      fetchKaryawan();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item: Karyawan) => {
    setEditingId(item.id);
    setNik(item.nik);
    setNama(item.nama);
    setEmail(item.email);
    setTempatLahir(item.tempat_lahir || "");
    setTanggalLahir(item.tanggal_lahir || "");
    setAlamat(item.alamat || "");
    setIdJabatan(item.id_jabatan.toString());
    setStatusAktif(item.status_aktif);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Apakah Anda yakin ingin menghapus data karyawan ini?")) return;
    try {
      const res = await fetch(`https://payroll.politekniklp3i-tasikmalaya.ac.id/api/karyawan/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Gagal menghapus karyawan");
      }
      fetchKaryawan();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };


  const resetForm = () => {
    setNik("");
    setNama("");
    setEmail("");
    setTempatLahir("");
    setTanggalLahir("");
    setAlamat("");
    setIdJabatan("");
    setStatusAktif(true);
    setEditingId(null);
  };

  const filteredJabatan = jabatanList.filter(j => 
    j.jabatan.toLowerCase().includes(searchJabatan.toLowerCase())
  );



  useEffect(() => {
    if (token) {
      fetchJabatan();
      fetchKaryawan();
    }
  }, [token]);

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
              <i className="fa-solid fa-user-plus text-xl"></i>
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Tambah Karyawan
            </h2>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                  NIK
                </label>
                <input
                  type="text"
                  placeholder="NIK"
                  value={nik}
                  onChange={(e) => setNik(e.target.value)}
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
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  value={tempatLahir}
                  onChange={(e) => setTempatLahir(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-[#004d73] focus:ring-4 focus:ring-[#004d73]/10 dark:border-zinc-700 dark:bg-zinc-800"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  value={tanggalLahir}
                  onChange={(e) => setTanggalLahir(e.target.value)}
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
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                className="w-full pb-12 rounded-xl border border-slate-200 bg-slate-50 h-24 text-sm outline-none transition-all focus:border-[#004d73] focus:ring-4 focus:ring-[#004d73]/10 dark:border-zinc-700 dark:bg-zinc-800"
              />
            </div>

            {/* Searchable Select Jabatan */}
            <div className="relative" ref={selectRef}>
              <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                Jabatan
              </label>

              {/* Trigger Dropdown */}
              <div
                onClick={() => setIsSelectOpen(!isSelectOpen)}
                className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-zinc-700 dark:bg-zinc-800 flex justify-between items-center group"
              >
                <span
                  className={
                    idJabatan
                      ? "text-slate-900 dark:text-white font-medium"
                      : "text-slate-400"
                  }
                >
                  {/* Jika sudah pilih, tampilkan labelnya, jika belum tampilkan placeholder */}
                  {jabatanList.find((j) => j.id.toString() === idJabatan)
                    ?.jabatan || "Pilih Jabatan"}
                </span>
                <span className="text-slate-400 group-hover:text-primary transition-colors">
                  ▼
                </span>
              </div>

              {/* Dropdown Menu */}
              {isSelectOpen && (
                <div className="absolute z-50 mt-2 w-full rounded-2xl border border-slate-100 bg-white p-2 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 overflow-hidden ring-1 ring-slate-200/50">
                  {/* Input Pencarian */}
                  <div className="mb-2 px-1">
                    <input
                      type="text"
                      placeholder="Cari jabatan..."
                      value={searchJabatan}
                      onChange={(e) => setSearchJabatan(e.target.value)}
                      className="w-full rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5 text-xs outline-none focus:border-primary dark:border-zinc-800 dark:bg-zinc-800"
                      onClick={(e) => e.stopPropagation()} // Mencegah dropdown tertutup saat klik input
                    />
                  </div>

                  {/* List Item */}
                  <div className="max-h-56 overflow-y-auto custom-scrollbar">
                    {filteredJabatan.length === 0 ? (
                      <p className="p-4 text-center text-xs text-slate-400 italic">
                        Tidak ditemukan
                      </p>
                    ) : (
                      filteredJabatan.map((j) => (
                        <div
                          key={j.id}
                          onClick={() => {
                            setIdJabatan(j.id.toString());
                            setIsSelectOpen(false);
                            setSearchJabatan("");
                          }}
                          className={`rounded-xl px-4 py-3 text-sm font-medium cursor-pointer transition-all mb-1 last:mb-0 ${
                            idJabatan === j.id.toString()
                              ? "bg-primary text-white shadow-lg shadow-primary/20"
                              : "hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-600 dark:text-slate-300 hover:text-primary"
                          }`}
                        >
                          {j.jabatan}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
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
                  <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">
                    No
                  </th>
                  <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">
                    Nama
                  </th>
                  <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">
                    Jabatan
                  </th>
                  <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px]">
                    Status
                  </th>
                  <th className="px-8 py-4 font-bold uppercase tracking-wider text-[10px] text-right">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-zinc-800">
                {karyawanList.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-8 py-16 text-center text-slate-400 italic"
                    >
                      {loading ? "Menarik data..." : "No employees found."}
                    </td>
                  </tr>
                ) : (
                  karyawanList.map((item, index) => (
                    <tr
                      key={item.id}
                      className="group hover:bg-slate-50/50 dark:hover:bg-zinc-800/30 transition-colors"
                    >
                      <td className="px-8 py-5 font-bold text-slate-400">
                        {index + 1}
                      </td>
                      <td className="px-8 py-5 font-bold text-slate-700 dark:text-white group-hover:text-primary transition-colors">
                        {item.nama}
                      </td>
                      <td className="px-8 py-5">
                        <span className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-zinc-800 text-[11px] font-bold text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-zinc-700 group-hover:bg-white dark:group-hover:bg-primary/20 transition-all">
                          {item.jabatan?.jabatan ||
                            jabatanList.find((j) => j.id === item.id_jabatan)
                              ?.jabatan ||
                            "N/A"}
                        </span>
                      </td>
                      <td className="px-8 py-5">
                        {item.status_aktif ? (
                          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-[10px] font-black uppercase tracking-widest border border-emerald-200">
                            Aktif
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-[10px] font-black uppercase tracking-widest border border-rose-200">
                            Off
                          </span>
                        )}
                      </td>
                      <td className="px-8 py-5 text-right">
                        <div className="flex justify-end gap-3 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          <button
                            onClick={() => setSelectedKaryawan(item)}
                            className="h-9 w-9 flex items-center justify-center text-slate-400 hover:text-white hover:bg-tertiary rounded-xl transition-all shadow-sm hover:shadow-tertiary/30"
                            title="Detail"
                          >
                            ℹ️
                          </button>
                          <button
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
                          </button>
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


function KaryawanRow({
  no,
  nama,
  jabatan,
  status
}: {
  no: string;
  nama: string;
  jabatan: string;
  status: string;
}) {
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
          <button
            className="h-9 w-9 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#22d3ee] rounded-xl transition-all shadow-sm"
            title="Detail"
          >
            <i className="fi fi-rr-info"></i>
          </button>
          <button
            className="h-9 w-9 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#004d73] rounded-xl transition-all shadow-sm"
            title="Edit"
          >
            <i className="fi fi-rr-edit"></i>
          </button>
          <button
            className="h-9 w-9 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-500 rounded-xl transition-all shadow-sm"
            title="Hapus"
          >
            <i className="fi fi-rr-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}
