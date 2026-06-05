import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // generates a static `out/` folder
  trailingSlash: true,   // /about → /about/index.html (better for Apache shared hosting)
  images: {
    unoptimized: true,   // next/image optimisation requires a server; disable for static export
  },
};

export default nextConfig;
