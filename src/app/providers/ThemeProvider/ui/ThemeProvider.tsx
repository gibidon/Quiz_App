import React, { useState } from 'react'
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from '../lib/ThemeContext'

interface ThemeProviderProps {
  children: React.ReactNode
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
