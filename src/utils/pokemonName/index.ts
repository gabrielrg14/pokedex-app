export const formatPokemonName = (pokemonName: string) => {
  // Removes hyphen from pokémon name and puts a blank in its place
  return pokemonName
    .replace(/-/g, " ")
    // Capitalize the first letter of each word that makes up the pokémon's name
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
}
