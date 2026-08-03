// GitHub Pages serves the site from /<repo>/, so any URL we write by hand
// (image src with `unoptimized`, plain <a href> to a file in /public) needs the
// prefix applied manually — Next only rewrites it automatically for routes.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${basePath}${path}`;
