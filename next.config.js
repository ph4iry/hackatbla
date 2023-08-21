/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['tailwindui.com'],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
  }
}

module.exports = nextConfig
