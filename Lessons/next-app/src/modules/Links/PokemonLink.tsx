import Link from "next/link"
import { PropsWithChildren } from "react"

  export default function PokemonLink({id, children}: PropsWithChildren<{id: number}>) {
    
    if (!children) {
      return null
    }
    
    return (
      <Link href={{pathname: '/pokemon/[id]', query: {id: id},}}>{children}</Link>
    )
  }