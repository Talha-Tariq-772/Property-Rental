/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Changed from 'protocols' to 'protocol'
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
       {
        protocol: 'https', // Changed from 'protocols' to 'protocol'
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;