/** @type {import('next').NextConfig} */

// URL par défaut si NEXT_PUBLIC_IMAGE_BASE_URL n'est pas définie
const imageBaseUrl =
  process.env.NEXT_PUBLIC_IMAGE_BASE_URL ||
  "https://apiportfolio.davidwebprojects.fr";
const hostname = new URL(imageBaseUrl).hostname;

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname,
        pathname: "/**", // autorise toutes les images du domaine
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
