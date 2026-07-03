import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  trailingSlash: true,
  basePath: "/cmac",
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
