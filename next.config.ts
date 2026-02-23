import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites(){
    return [
      {
       source: "/api/:path*",
      destination:"https://payroll.politekniklp3i-tasikmalaya.ac.id/:path*",// Ganti dengan URL API eksternal yang diinginkan
      },
    ];
  },
};

export default nextConfig;
