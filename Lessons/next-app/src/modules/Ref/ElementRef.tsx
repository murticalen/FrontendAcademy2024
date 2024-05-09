import { Box, BoxProps, Flex } from "@kuma-ui/core"
import { useEffect, useRef, useState } from "react"

export const ElementRef = (props: BoxProps) => {

    const ref = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState<number|undefined>()

    useEffect(() => {
        setWidth(ref?.current?.clientWidth)
        console.log(ref?.current)
    }, [])

    console.log(width)

    return (
        <>
                <Box ref={ref} {...props} border="1px solid red" w="250px" overflow="scroll">
            This is an element with a ref
            <Flex w="fit-content">
                <Box h="80px" w="150px" bg="yellow"></Box>
                <Box h="80px" w="160px" bg="blue"></Box>
                <Box h="80px" w="180px" bg="green"></Box>
            </Flex>
        </Box>
        <Box h="36px" w="80px" cursor="pointer" m="spacings.lg" onClick={() => {
            ref?.current?.scrollBy({left: 3000})
        }}>Click me</Box>
        </>
    )
}