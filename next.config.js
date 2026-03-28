/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.jsdelivr.net", "upload.wikimedia.org", "www.vectorlogo.zone", "streamlit.io", "user-images.githubusercontent.com", "raw.githubusercontent.com"],
    unoptimized: true,
  },
  transpilePackages: ["three"],
};

module.exports = nextConfig;
