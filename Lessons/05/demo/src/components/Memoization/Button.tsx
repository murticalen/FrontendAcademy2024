import { memo } from "react"

interface ButtonProps {
    name?: string
    onClick: () => void
}

export const Button = (props: ButtonProps) => {

    if (props.name) {
        console.log(`${props.name} button is re-rendering`)
    }

    return (
        <button onClick={props.onClick} style={{width: '360px'}}>
            {props.name || 'BUTTON'}
        </button>
    )
}

export const MemoizedButton = memo(Button, (prev, next) => prev.name === next.name)