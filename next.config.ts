import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: "/booking-session.io",
  assetPrefix: "/booking-session.io/",
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
  swcMinify: false,
};

export default nextConfig;
