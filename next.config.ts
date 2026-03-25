import path from 'node:path';
import {fileURLToPath} from 'node:url';
import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const withNextIntl = createNextIntlPlugin(
  path.join(projectRoot, 'i18n/request.ts')
);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: projectRoot,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default withNextIntl(nextConfig);