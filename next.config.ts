import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["sharp", "@resvg/resvg-js"],
  turbopack: {
    resolveAlias: {
      // Stub out Node-only modules for browser bundle
      sharp: { browser: "./src/lib/sharp-stub.ts" },
      "detect-libc": { browser: "./src/lib/sharp-stub.ts" },
    },
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
