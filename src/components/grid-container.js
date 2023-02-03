import GridItem from './grid-item'

export default function GridContainer({ pokemons }) {
  return (
    <div className="grid min-h-screen grid-cols-2 content-start gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {pokemons.map((pokemon) => (
        <GridItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  )
}
