"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  
  // State sesuai dengan kebutuhan JSON di gambar kedua
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin", // Default value sesuai gambar
  });
  
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registrasi gagal");
      }

      // Jika sukses, arahkan ke dashboard sesuai struktur folder 'app/dashboard'
      alert("Registrasi Berhasil!");
      router.push("/dashboard");
      
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black p-4">
      <main className="w-full max-w-md rounded-2xl bg-white p-8 shadow dark:bg-zinc-900">
        <h1 className="mb-6 text-center text-2xl font-semibold">Create Account</h1>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Input Nama */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="hidayatsan"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Input Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="nama@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Input Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Input Role */}
          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <select 
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-black bg-white"
            >
              <option value="admin">Admin</option>
              <option value="user">user</option>
            </select>
          </div>

          {error && <p className="text-sm text-red-500 bg-red-50 p-2 rounded">{error}</p>}

          <button
            disabled={loading}
            className="w-full rounded-lg bg-black py-2 text-white font-medium hover:bg-zinc-800 disabled:opacity-50 transition-colors"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-zinc-600">
          Sudah punya akun?{" "}
          <Link href="/sign-in" className="font-semibold text-black underline">
            Sign In di sini
          </Link>
        </p>
      </main>
    </div>
  );
}