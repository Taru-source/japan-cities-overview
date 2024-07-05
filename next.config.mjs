/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  experimental: {
    forceSwcTransforms: true
  }
};

export default nextConfig;
