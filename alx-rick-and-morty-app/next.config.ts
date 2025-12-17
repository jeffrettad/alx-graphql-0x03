#import type { NextConfig } from "next";
import * as Sentry from '@sentry/react';
Sentry.init ({
  dsn:
})

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
