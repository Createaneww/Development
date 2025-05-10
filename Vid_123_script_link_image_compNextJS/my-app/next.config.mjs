/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.marvel.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
