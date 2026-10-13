import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  turbopack : {
      root: __dirname,
    },
  experimental: {
    globalNotFound: true
  }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
