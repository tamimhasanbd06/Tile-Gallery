/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      // Tile 001
      {
        protocol: 'https',
        hostname: 's2.imgbb.ws',
        pathname: '/file/storage-sv2/YPfWD.png',
      },

      // Tile 002
      {
        protocol: 'https',
        hostname: 's1.imgbb.ws',
        pathname: '/file/storage-sv1/YPfSy.png',
      },

      // Tile 003
      {
        protocol: 'https',
        hostname: 's2.imgbb.ws',
        pathname: '/file/storage-sv2/YPvIh.png',
      },

      // Tile 004
      {
        protocol: 'https',
        hostname: 's1.imgbb.ws',
        pathname: '/file/storage-sv1/YPv9R.png',
      },

      // Tile 005
      {
        protocol: 'https',
        hostname: 's2.imgbb.ws',
        pathname: '/file/storage-sv2/YPviC.png',
      },

      // Tile 006
      {
        protocol: 'https',
        hostname: 's1.imgbb.ws',
        pathname: '/file/storage-sv1/YPzGz.png',
      },

      // Tile 007
      {
        protocol: 'https',
        hostname: 's1.imgbb.ws',
        pathname: '/file/storage-sv1/YP5aM.png',
      },

      // Tile 008
      {
        protocol: 'https',
        hostname: 's2.imgbb.ws',
        pathname: '/file/storage-sv2/YP5cp.png',
      },

      // Tile 009
      {
        protocol: 'https',
        hostname: 's1.imgbb.ws',
        pathname: '/file/storage-sv1/YPSBj.jpg',
      },

      // Tile 010
      {
        protocol: 'https',
        hostname: 's1.imgbb.ws',
        pathname: '/file/storage-sv1/YPSsU.jpg',
      },

      // Tile 011
      {
        protocol: 'https',
        hostname: 's1.imgbb.ws',
        pathname: '/file/storage-sv1/Yd4pe.png',
      },

      // Tile 012 (corrected broken URL support)
      {
        protocol: 'https',
        hostname: 'imgbb.ws',
      },

      // Tile 013
      {
        protocol: 'https',
        hostname: 's1.imgbb.ws',
        pathname: '/file/storage-sv1/Yd4E5.png',
      },

      // Tile 014
      {
        protocol: 'https',
        hostname: 's2.imgbb.ws',
        pathname: '/file/storage-sv2/Yd45O.png',
      },

      // Tile 015
      {
        protocol: 'https',
        hostname: 's1.imgbb.ws',
        pathname: '/file/storage-sv1/YdGgH.png',
      },
    ],
  },
};

export default nextConfig;