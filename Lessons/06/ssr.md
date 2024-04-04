To show how server-side rendering works in Next.js, init a new page which will show Pokémon details based on Pokémon API's data.

Place the page at `pages/pokemon/[id].tsx` file path, to again use file-system based routing. The page should just display the Pokémon's name at first.

Add a link to the page of the next and previous Pokémon, if they exist. Extract the PokemonLink component in `Link` module in `PokemonLink.tsx` file.

Demonstrate how `useEffect` is only executed on client, how `console.log` on server is written in terminal and condition for `isServer` variable using `typeof window === 'undefined'` condition.

Write a `useIsServer` hook, which is the correct way of having conditions whether the code is currently running on server or client.

Start your demonstration on `http://localhost:3000/pokemon/1` page.
