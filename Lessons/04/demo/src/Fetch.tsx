import { useEffect, useState } from 'react'

interface ResponseItem {
  name: string
  url: string
}

interface PokemonResponse {
  count: number
  next: string | null
  previous: string | null
  results: ResponseItem[]
}

export function Fetch() {
  const [response, setResponse] = useState<PokemonResponse | undefined>(undefined)

  useEffect(() => {

    const called = async () => {
      try {
        const jsonValue = await (await fetch('https://pokeapi.co/api/v2/pokemon')).json()
        setResponse(jsonValue)
      } catch (e) {
        console.error(e)
      }
    }

    called()
  }, [])

  if (!response) {
    return null
  }

  return <>{response.results[0].name}</>
}
