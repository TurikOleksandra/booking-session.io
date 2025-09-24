import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/booking-session.io" : "",
  assetPrefix: isProd ? "/booking-session.io/" : "",
  images: {
    unoptimized: true,
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
