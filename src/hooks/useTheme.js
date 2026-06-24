import { useEffect, useState } from 'react'

const THEME_KEY = 'benedict-portfolio-theme'

function getPreferredTheme() {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const storedTheme = window.localStorage.getItem(THEME_KEY)
  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(getPreferredTheme)

  useEffect(() => {
    const root = document.documentElement

    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  return {
    theme,
    isDark: theme === 'dark',
    setTheme,
    toggleTheme: () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark')),
  }
}
