import MessageContext from '@/context/MessageContext'
import { useIsServer } from '@/hooks/useIsServer'
import PokemonLink from '@/modules/Links/PokemonLink'
import { Portal } from '@/modules/Portal/Portal'
import { ElementRef } from '@/modules/Ref/ElementRef'
import { Ref } from '@/modules/Ref/Ref'
import { GetServerSideProps } from 'next'

interface PokemonProps {
  pokemon: {
    id: number
    name: string
  }
}

export default function Pokemon(props: PokemonProps) {

  // useEffect(() => {
  //     console.log('LOGGING IN EFFECT')
  // }, [])

  const isServer = useIsServer()

  console.log('LOGGING TO CONSOLE')
  console.log(typeof window === 'undefined')

  const nextId = props.pokemon.id + 1

  return (
    <main>
      This in an Pokemon page for Sofascore academy. We are showing {props.pokemon.name}.
      {!isServer && ` Its id is ${props.pokemon.id}`}
      <div><PokemonLink id={nextId}>Next pokemon is with id {nextId}</PokemonLink></div>
      <Ref />
      <ElementRef mt='36px' />
      <MessageContext.Provider value={{ message: props.pokemon.name }}>
        <Portal />
      </MessageContext.Provider>
    </main>
  )
}

// This value is considered fresh for ten seconds (s-maxage=10).
// If a request is repeated within the next 10 seconds, the previously
// cached value will still be fresh. If the request is repeated before 59 seconds,
// the cached value will be stale but still render (stale-while-revalidate=59).
//
// In the background, a revalidation request will be made to populate the cache
// with a fresh value. If you refresh the page, you will see the new value.
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, res } = context

  try {
    //@ts-ignore
    const { id } = params
    const details = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)).json()

    console.log(details.name)
    const props: PokemonProps = { pokemon: { name: details.name, id: details.id } }

    return {
      props: props,
    }
  } catch (error) {
    res.statusCode = 404
    return { props: { error } }
  }
}
