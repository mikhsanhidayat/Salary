'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Cek apakah user sudah login dari localStorage
    const userData = localStorage.getItem('user');

    if (!userData) {
      // Jika tidak ada user data, redirect ke sign-in
      router.push('/sign-in');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  // Jika masih loading atau belum authenticated, jangan render
  if (isAuthenticated === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      {/* Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="flex flex-1 flex-col">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1">
          <div className="mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
