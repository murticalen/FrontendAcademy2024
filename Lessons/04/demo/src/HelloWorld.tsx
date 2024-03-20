import { CSSProperties, PropsWithChildren } from 'react'

interface Props {
  color: string;
  transform: CSSProperties['textTransform'];
  times: number
}

export function HelloWorld(p: PropsWithChildren<Props>) {
  const { color, transform, times } = p

  const onClick = () => alert('Alerted!')

  return (
    <>
      <div style={{ color: color, textTransform: transform, cursor: 'pointer' }} onClick={onClick}>
        Hello World {times} times
      </div>
      {p.children}
    </>
  )
}
