/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'p16-pu-sign-useast8.tiktokcdn-us.com',
                port: '',
                pathname: '/tos-useast8-avt-0068-tx2/**',
            },
            {
                protocol: 'https',
                hostname: 'unsplash.com',
                port: '',
                pathname: '/photos/**',
            },
        ],
    },
};

export default nextConfig;
