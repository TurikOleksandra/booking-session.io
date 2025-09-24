import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // ✅ enables styled-components with SWC
  },
  reactStrictMode: true,    // (optional but recommended)
};

export default nextConfig;
