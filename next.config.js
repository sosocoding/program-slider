/** @type {import('next').NextConfig} */

const env = {
  GRAPHQL_SERVER: 'https://tf1-interview.hasura.app/v1/graphql',
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env,
  images: {
    domains: ['photos.tf1.fr'],
  },
}

module.exports = nextConfig
