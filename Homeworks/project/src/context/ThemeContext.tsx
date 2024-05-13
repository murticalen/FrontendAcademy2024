import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useEffect, useState } from 'react'

interface ContextValue {
  isDark: boolean
  setIsDark: Dispatch<SetStateAction<boolean>>
}

const ThemeContext = createContext<ContextValue>({} as ContextValue)

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true)
    }
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return <ThemeContext.Provider value={{ isDark, setIsDark }}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => useContext(ThemeContext)
