import * as S from "./styles"

type PokemonNumberProps = {
  number?: number
}

export const PokemonNumber = ({ number }: PokemonNumberProps) => {
  let pokemonNumber = ""

  if (number) {
    let numberWithZeros = String(number)
    let characterCounter = numberWithZeros.length
    const numberOfZeros = characterCounter >= 5 ? 5 : 4

    while (characterCounter < numberOfZeros) {
      numberWithZeros = "0" + numberWithZeros
      characterCounter++
    }
    pokemonNumber = `#${numberWithZeros}`
  }

  return <S.Number>{pokemonNumber}</S.Number>
}
