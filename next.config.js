/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  appDir: true,
}

module.exports = {
  images: {
    domains: ["links.papareact.com","fakestoreapi.com", './src/assets/products/']
  }
}