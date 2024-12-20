/** @type {import('next').NextConfig} */
const nextConfig = { 
    images: {
        domains: ['kalipro.re'],
        formats: ['image/avif', 'image/webp'],
        unoptimized: true
    },
    poweredByHeader: false,

    // output: 'export',

    // async headers() {
    //     return [
    //         {
    //             source: "/api/:path*",
    //             headers: [
    //                 { key: "Access-Control-Allow-Credentials", value: "true" },
    //                 { key: "Access-Control-Allow-Origin", value: "localhost:3000" }, 
    //                 { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
    //                 { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
    //             ]
    //         }
    //     ]
    // }
};

export default nextConfig;