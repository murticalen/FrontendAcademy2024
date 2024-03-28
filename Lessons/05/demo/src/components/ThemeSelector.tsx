import { PropsWithChildren, useState } from 'react'

export const ThemeSelector = (props: PropsWithChildren<{}>) => {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={isDark ? 'dark-theme' : 'light-theme'}>
      <button onClick={() => setIsDark(v => !v)}>Set {isDark ? 'light' : 'dark'} theme</button>
      {props.children}
    </div>
  )
}
