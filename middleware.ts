import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Routes yang tidak perlu proteksi (publik)
  const publicRoutes = ['/sign-in', '/register'];
  
  // Routes yang perlu proteksi (private)
  const protectedRoutes = ['/(page)', '/(master)'];
  
  // Cek apakah route ini dilindungi
  const isProtected = protectedRoutes.some(route => pathname.startsWith(route.replace(/[()]/g, '')));
  const isPublic = publicRoutes.some(route => pathname.startsWith(route));
  
  // Ambil token dari cookie atau storage (gunakan cookie untuk lebih aman)
  const token = request.cookies.get('authToken')?.value;
  
  // Jika route dilindungi dan tidak ada token, redirect ke sign-in
  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }
  
  // Jika user sudah login dan mencoba akses sign-in/register, redirect ke dashboard
  if (isPublic && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
