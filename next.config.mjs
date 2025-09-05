/** @type {import('next').NextConfig} */

import process from 'process';

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: isProd ? "/chrgarcia19.github.io" : "",
    assetPrefix: isProd ? "chrgarcia19.github.io" : "",
};

export default nextConfig;
