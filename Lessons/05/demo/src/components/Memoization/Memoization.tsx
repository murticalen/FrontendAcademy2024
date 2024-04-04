import { useCallback, useState } from "react"
import { Button, MemoizedButton } from "./Button"

export const Memoization = () => {
    const [random, setRandom] = useState(Math.random())

    const onClick = () => setRandom(Math.random())
    const memoizedOnClick = useCallback(() => onClick(), [])

    return (
        <div style={{margin: '16px 0'}}><div style={{margin: '8px'}}>Memoization</div>
        <div>Current random number is {random.toFixed(2)}</div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: 'center', alignItems: 'center'}}>
        <MemoizedButton onClick={memoizedOnClick} name="memoized onClick, component wrapped in React.memo" />
        <Button onClick={memoizedOnClick} name="memoized onClick, component NOT wrapped" />
        <MemoizedButton onClick={onClick} name="NOT memoized onClick, component wrapped in React.memo" />
        <Button onClick={onClick} name="NOT memoized onClick, component NOT wrapped" />
        </div>
`
        </div>
    )
}