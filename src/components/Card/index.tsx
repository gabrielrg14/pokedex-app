import { useState, useCallback, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

import { ParamList, Pokemon } from "../../@types"
import { PokemonNumber } from "../PokemonNumber"
import { RowTypes } from "../RowTypes"
import { PokedexService } from "../../services"
import { formatPokemonName } from "../../utils"
import { useStore } from "../../store"

import * as S from "./styles"

type CardProps = {
  pokemon: Pokemon
}

export const Card = ({ pokemon }: CardProps) => {
  const [pokemonData, setPokemonData] = useState({} as Pokemon)
  const { sprite } = useStore()
  const navigation = useNavigation<StackNavigationProp<ParamList, "Pokedex">>()

  const getPokemonData = useCallback(() => {
    PokedexService.getPokemonByQuery(pokemon?.name).then((data) => setPokemonData(data))
  }, [pokemon])

  useEffect(() => {
    getPokemonData()
  }, [getPokemonData])

  return (
    <S.CardLink
      accessibilityRole="button"
      onPress={() => navigation.navigate("Pokemon", pokemonData)}
      aria-label={pokemon.name}
    >
      {pokemonData?.sprites?.other["official-artwork"]?.[sprite] && (
        <S.PokemonImage
          testID="pokemonImage"
          source={{ uri: pokemonData?.sprites.other["official-artwork"][sprite] }}
          width={156}
          height={156}
          alt={pokemon.name}
        />
      )}

      <S.PokemonInfos>
        <PokemonNumber number={pokemonData?.id} />
        <S.PokemonName>{formatPokemonName(pokemon.name)}</S.PokemonName>
      </S.PokemonInfos>

      <RowTypes types={pokemonData?.types} />
    </S.CardLink>
  )
}
