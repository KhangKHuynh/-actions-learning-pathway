/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/actions-learning-pathway',  
  assetPrefix: '/actions-learning-pathway/', 
};

module.exports = nextConfig;
