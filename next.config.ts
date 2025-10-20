import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static HTML export suitable for GitHub Pages
  output: "export",
  // Change output directory from 'out' to 'docs'
  distDir: "docs",
  // If deploying to a project subpath like /my-portfolio, set basePath and assetPrefix.
  // For user/organization pages (username.github.io) leave these empty.
  // basePath: "/my-portfolio",
  // assetPrefix: "/my-portfolio/",
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
};

export default nextConfig;
