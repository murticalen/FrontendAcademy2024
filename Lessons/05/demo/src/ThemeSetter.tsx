import { PropsWithChildren, useState } from 'react'

export const ThemeSetter = (p: PropsWithChildren<{}>) => {
  const [isDark, setIsDark] = useState<boolean>(false)

  return (
    <>
      <button onClick={() => setIsDark(v => !v)}>
        {isDark ? 'Set light theme' : 'Set dark theme'}
      </button>
      <div className={isDark ? 'dark-theme' : 'light-theme'}>
        {p.children}
      </div>
    </>
  )
}
