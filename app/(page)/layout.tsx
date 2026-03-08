import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

export default function MasterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      {/* Sidebar tetap di kiri */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="flex flex-1 flex-col">
        {/* Header di bagian atas */}
        <Header />

        {/* Konten Halaman (Divisi/Jabatan/Karyawan) */}
        <main className="flex-1  ">
          <div className="mx-auto ">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}   