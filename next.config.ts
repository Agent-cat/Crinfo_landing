import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "crossref.org",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "external-content.duckduckgo.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
