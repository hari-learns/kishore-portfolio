import type { NextConfig } from "next";

// Served from the root of the custom domain kishorekumardoc.com via GitHub
// Pages, so there is no basePath — asset URLs are absolute from "/".
//
// public/CNAME is what keeps the domain bound. GitHub writes a CNAME file into
// the gh-pages branch when a custom domain is set, but scripts/deploy.sh
// force-pushes out/, which would wipe it on the next deploy. Emitting it from
// public/ means every build carries it.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    // GitHub Pages has no image optimisation server.
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
