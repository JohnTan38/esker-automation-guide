import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  // Allow local network IPs during development
  allowedDevOrigins: ['http://192.168.43.134:3000', 'http://localhost:3000', '*'], // or ['*'] if you want to allow any
};

export default nextConfig;
