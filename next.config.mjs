/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === "production" ? "/portfolio_website" : "",
    assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio_website" : "",
};

export default nextConfig;
