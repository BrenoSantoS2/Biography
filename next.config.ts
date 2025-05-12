import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pt',
        permanent: true, // Redirecionamento permanente (308)
      },
    ];
  },
};

export default nextConfig;
