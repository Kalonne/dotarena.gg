'use strict';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'], // Add your allowed image domains here
  },
};

module.exports = nextConfig;
