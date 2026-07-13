import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface ThemeSwitchProps {
  lite?: boolean
  className?: string
}

// El ThemeSwitch de nextra-theme-docs hardcodea light/dark/system. Este solo alterna
// entre claro y oscuro: no hay opción "Sistema".
export function ThemeSwitch({ lite, className }: ThemeSwitchProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === 'dark'
  const nextTheme = isDark ? 'light' : 'dark'
  const label = isDark ? 'Claro' : 'Oscuro'

  return (
    <button
      type="button"
      className={className}
      title={`Cambiar a modo ${label.toLowerCase()}`}
      aria-label={`Cambiar a modo ${label.toLowerCase()}`}
      onClick={() => setTheme(nextTheme)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.35rem 0.6rem',
        borderRadius: '0.375rem',
        background: 'transparent',
        cursor: 'pointer'
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {isDark ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </>
        ) : (
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        )}
      </svg>
      <span className={lite ? 'md:_hidden' : undefined}>{label}</span>
    </button>
  )
}
