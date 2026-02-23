import React from 'react'
import Sidebar from '@/components/sidebar'; // Menggunakan alias @/ agar lebih rapi

const Page = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar tetap di kiri */}
      <Sidebar /> 
      
      {/* Konten Utama */}
      <div className="flex-1 overflow-y-auto p-8 text-black">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h1 className="text-3xl font-bold text-[#004d73]">DATA DIVISI</h1>
          <p className="text-gray-500 mt-2">Manajemen data divisi perusahaan SalaryApp</p>
          
          <hr className="my-6 border-gray-100" />
          
          {/* Tempat isi tabel atau konten divisi Anda nanti */}
          <div className="bg-blue-50 p-4 rounded border border-blue-100 text-blue-800">
            Halaman ini sudah berhasil terhubung melalui Sidebar.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;