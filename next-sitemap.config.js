/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // LINK-PENDIENTE: reemplazar cuando se defina dónde se publica el sitio (mantener en sync con theme.config.tsx)
  siteUrl: 'https://como-entrenar-a-tu-ia.vercel.app',
  outDir: 'out', // write directly into the static export (postbuild runs after next build copies public/)
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Don't need index for <50k URLs
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/_next/*'],
      },
    ],
  },
  transform: async (config, path) => {
    // Set homepage to highest priority
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }
    if (path.startsWith('/clase') || path.startsWith('/verticales')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }
    return {
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }
  },
}
