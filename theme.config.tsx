import React from 'react'
import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const SITE_NAME = 'Cómo entrenar a tu IA'
// LINK-PENDIENTE: reemplazar cuando se defina dónde se publica el sitio
const SITE_URL = 'https://como-entrenar-a-tu-ia.vercel.app'

export default {
  logo: (
    <span
      style={{
        fontFamily: "'Tungsten', 'Oswald', 'Arial Narrow', sans-serif",
        fontWeight: 600,
        fontSize: '1.35rem',
        textTransform: 'uppercase',
        letterSpacing: '0.02em'
      }}
    >
      Cómo entrenar a tu IA
    </span>
  ),
  editLink: {
    component: null
  },
  feedback: {
    content: null
  },
  footer: {
    content: (
      <span>
        © {new Date().getFullYear()} Anfibia Escuela · Taller "Cómo entrenar a tu IA".
        Adaptado de{' '}
        <a
          href="https://github.com/carlvellotti/claude-code-everyone-course"
          target="_blank"
          rel="noopener noreferrer"
        >
          Claude Code for Everyone
        </a>{' '}
        de Carl Vellotti, bajo licencia{' '}
        <a
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC BY-NC-ND 4.0
        </a>
        .
      </span>
    )
  },
  useNextSeoProps() {
    return { titleTemplate: `%s – ${SITE_NAME}` }
  },
  nextThemes: {
    defaultTheme: 'system'
  },
  head: function Head() {
    const { frontMatter, title } = useConfig()
    const { asPath } = useRouter()
    const isHome = asPath === '/'
    const pageTitle = isHome
      ? `${SITE_NAME} | Taller de Claude Code sin programar – Anfibia Escuela`
      : (title ? `${title} – ${SITE_NAME}` : SITE_NAME)
    const description =
      frontMatter?.description ||
      'Taller de Claude Code para no programadores. Aprendé a trabajar con IA desde la terminal: archivos, agentes, automatización y proyectos publicados. Anfibia Escuela.'
    const ogImage = frontMatter?.ogImage
    const url = `${SITE_URL}${asPath}`

    return (
      <>
        <title>{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        {ogImage && (
          <>
            <meta property="og:image" content={`${SITE_URL}${ogImage}`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
          </>
        )}

        {/* Twitter */}
        <meta name="twitter:card" content={ogImage ? 'summary_large_image' : 'summary'} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        {ogImage && <meta name="twitter:image" content={`${SITE_URL}${ogImage}`} />}

        {/* Additional SEO */}
        {frontMatter?.keywords && (
          <meta name="keywords" content={frontMatter.keywords} />
        )}

        {/* Structured Data */}
        {frontMatter?.schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(frontMatter.schema)
            }}
          />
        )}
      </>
    )
  },
  primaryHue: 0,
  primarySaturation: 0,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    backToTop: true
  }
}
