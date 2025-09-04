/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === "production" ? "/christiangarcia.tech" : "",
    assetPrefix: process.env.NODE_ENV === "production" ? "/christiangarcia.tech" : "",
};

export default nextConfig;
