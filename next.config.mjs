/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/Auth/Login',
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
