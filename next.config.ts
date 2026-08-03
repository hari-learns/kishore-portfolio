import type { NextConfig } from "next";

// Deployed as a fully static site to GitHub Pages at
// https://hari-learns.github.io/kishore-portfolio/
// The repo name becomes the URL sub-path, so basePath must match it.
const repo = "kishore-portfolio";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // GitHub Pages has no image optimisation server.
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",
};

export default nextConfig;
