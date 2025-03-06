/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'h30fnvgbtp.ufs.sh',
        },
     
      ],
    },
  };
  
  export default nextConfig;