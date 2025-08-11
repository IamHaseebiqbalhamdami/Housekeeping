/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  trailingSlash: true, // Ensures consistent URLs (e.g., `/about/`)
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during build
  },
  typescript: {
    ignoreBuildErrors: true, // Disables TypeScript errors
  },
  images: {
    unoptimized: true, // Required for static exports (Hostinger)
  },
  // basePath: '/your-repo-name', // Uncomment if deploying under subpath
};

export default nextConfig;
