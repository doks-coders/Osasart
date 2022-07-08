module.exports = {
    async rewrites() {
      return [
        {
          source: '/Sitemap.xml',
          destination: '/api/sitemap',
        },
      ]
    },
  }