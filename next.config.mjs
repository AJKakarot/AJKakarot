/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/blog/roadmap',
        destination: 'https://dub.sh/free-dev-resources',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
