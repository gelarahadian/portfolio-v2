/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'belilar.lar.my.id', 
          },
        ],
      },
};

export default nextConfig;
