import { withPayload } from '@payloadcms/next/withPayload';
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: [
        '@sanity/ui', 
        '@sanity/vision', 
        '@sanity/image-url',
        '@sanity/client',
        'styled-components'
    ],

    images: {
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'aconino.org',
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'www.avalpaycenter.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
            },
        ],
    },
};

export default withPayload(nextConfig);
