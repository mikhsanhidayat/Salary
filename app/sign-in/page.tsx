import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center   bg-cover justify-center  p-6">
      <main className="w-full max-w-md rounded-2xl  p-10 shadow-xl border border-gray-100">
        
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Selamat Datang</h1>
          <p className="mt-2 text-sm text-gray-500">Silakan masuk ke akun Anda</p>
        </div>

        {/* Form Section */}
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input 
              type="text" 
              placeholder="Masukkan username" 
              className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
            />
          </div>

          <div className="flex items-center justify-between text-xs mt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-600">Ingat saya</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">Lupa password?</a>
          </div>

          <button 
            type="submit" 
            className="mt-4 w-full rounded-lg bg-blue-600 p-3 tex   t-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-md"
          >
            Sign In
          </button>
        </form>

        {/* Footer Section */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Belum punya akun?{' '}
          <a href="#" className="font-semibold text-blue-600 hover:underline">Daftar sekarang</a>
        </p>
      </main>
    </div>
  );
}