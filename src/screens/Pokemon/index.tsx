import { StackScreenProps } from "@react-navigation/stack"

import { ParamList, Pokemon as IPokemon } from "../../@types"
import { NotFound, PokemonNumber, RowTypes, StatBar } from "../../components"
import { getPropsByPokemonType, formatPokemonName } from "../../utils"
import { useStore } from "../../store"

import * as S from "./styles"

export const Pokemon = ({ route }: StackScreenProps<ParamList, "Pokemon">) => {
  const { sprite } = useStore()

  if (!route.params) return <NotFound />

  const pokemon: IPokemon = route.params

  let background = getPropsByPokemonType(pokemon.types[0].type.name).background
  if (pokemon.types.length >= 2) {
    // Pokémon with 2 or more types
    background = [
      getPropsByPokemonType(pokemon.types[0].type.name).backgroundColor,
      getPropsByPokemonType(pokemon.types[1].type.name).backgroundColor,
    ]
  }

  // Removes abilities that have the same name
  const abilities = pokemon.abilities.map((item) => item.ability.name)
  const filtered = abilities.filter((item, index) => abilities.indexOf(item) === index)
  pokemon.abilities = pokemon.abilities.filter(
    (item, index) => filtered.indexOf(item.ability.name) === index
  )

  return (
    <S.Wrapper>
      <S.Container
        colors={background}
        locations={[0.5, 0.5]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <S.PokemonCard>
          <S.PokemonTitle>
            <S.PokemonName>{formatPokemonName(pokemon?.name)}</S.PokemonName>
            <PokemonNumber number={pokemon?.id} />
          </S.PokemonTitle>

          <S.ImageView>
            {pokemon?.sprites?.other["official-artwork"]?.[sprite] && (
              <S.PokemonImage
                source={{ uri: pokemon?.sprites.other["official-artwork"][sprite] }}
                width={256}
                height={256}
                alt={pokemon?.name}
              />
            )}
          </S.ImageView>

          <RowTypes types={pokemon?.types} />

          <S.PokemonData>
            <S.DataView>
              <S.DataTitle>Height</S.DataTitle>
              <S.InfoText>{pokemon?.height / 10}m</S.InfoText>
            </S.DataView>
            <S.DataView>
              <S.DataTitle>Weight</S.DataTitle>
              <S.InfoText>{pokemon?.weight / 10}kg</S.InfoText>
            </S.DataView>
            <S.DataView>
              <S.DataTitle>Abilities</S.DataTitle>
              {pokemon.abilities.map((item, index) => (
                <S.InfoText key={index}>{item.ability.name.replace("-", " ")}</S.InfoText>
              ))}
            </S.DataView>
          </S.PokemonData>

          <S.PokemonStats>
            <S.DataTitle>Stats</S.DataTitle>
            {pokemon?.stats.map((item, index) => (
              <S.Stat key={index}>
                <S.StatInfo>
                  <S.InfoText>{item.stat.name.replace("special-", "Sp. ")}</S.InfoText>
                  <S.InfoText>{item.base_stat}</S.InfoText>
                </S.StatInfo>
                <StatBar
                  type={pokemon?.types[0].type.name}
                  stat={item.stat.name}
                  baseStat={item.base_stat}
                />
              </S.Stat>
            ))}
          </S.PokemonStats>
        </S.PokemonCard>
      </S.Container>
    </S.Wrapper>
  )
}
