/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    minimumCacheTTL: 60,
    domains: [process.env.NEXT_PUBLIC_SUPABASE_DOMAIN],
    formats: ['image/webp'],
  },
  webpack(config, { dev, isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    if (!dev && isServer) {
      const originalEntry = config.entry;

      config.entry = async () => {
        const entries = await originalEntry();
        return {
          ...entries,
          'plugins/rss': './plugins/rss.ts',
        };
      };
    }

    return config;
  },
};
