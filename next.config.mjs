const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgbb.ws",
      },
      {
        protocol: "https",
        hostname: "s1.imgbb.ws",
      },
      {
        protocol: "https",
        hostname: "s2.imgbb.ws",
      },
    ],
  },
};

export default nextConfig;