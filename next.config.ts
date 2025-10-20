import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static HTML export suitable for GitHub Pages
  output: "export",
  // Output to docs folder for GitHub Pages
  distDir: "docs",
  // Force relative paths for static assets
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    // Do not block builds on ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Do not block builds on TS errors
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.output.publicPath = './';
    return config;
  },
};

export default nextConfig;
