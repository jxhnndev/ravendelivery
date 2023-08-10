/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    reactStrictMode: true,
    images: {
        domains: ["cdn.sanity.io"],
    },
}

module.exports = nextConfig
