/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/web-pagina-montaje' : '',
  async redirects() {
    if (isGithubPages) {
      return [
        {
          source: '/',
          destination: '/web-pagina-montaje',
          permanent: false,
        },
      ];
    }

    return [];
  },
};

module.exports = nextConfig;