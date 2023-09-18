/** @type {import('next').NextConfig} */
const { withPlugAI } = require('@plug-ai/plug-ai-core');

module.exports = withPlugAI({
    async redirects() {
        return [];
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: 'https://chat.openai.com',
                    },
                ],
            },
        ];
    },
});
