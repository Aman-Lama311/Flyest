import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.facebook.com",
      },
      {
        protocol: "https",
        hostname: "www.instagram.com",
      },
      {
        protocol: "https",
        hostname: "www.linkedin.com",
      },
      {
        protocol: "https",
        hostname: "www.grisport.co.uk",
      },
      {
        protocol: "https",
        hostname: "admin.ntb.gov.np",
      },
      {
        protocol: "https",
        hostname: "www.altitudehimalaya.com",
      },
      {
        protocol: "https",
        hostname: "www.relaxgetaways.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "infinityadventurenepal.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "www.researchgate.net",
      },
      {
        protocol: "https",
        hostname: "unsplash.it",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "media.worldnomads.com",
      },
      {
        protocol: "https",
        hostname: "alpineecotrek.com",
      },
    ],
  },
  domains: ['www.researchgate.net'],
};

export default nextConfig;
