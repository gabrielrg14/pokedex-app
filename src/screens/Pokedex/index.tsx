import { useState, useRef, useEffect, useCallback } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { SvgCss } from "react-native-svg"
import RNPickerSelect from "react-native-picker-select"

import { ParamList } from "../../@types"
import { Pokemon } from "../../@types"
import { PokedexService } from "../../services"
import { getPropsByPokemonType } from "../../utils"

import TypeDropdown from "../../components/TypeDropdown"
import Card from "../../components/Card"
import Button from "../../components/Button"

import * as S from "./styles"

const LIMIT = 12

type PokemonType = {
  name: string
  url: string
}

export const Pokedex = ({}: StackScreenProps<ParamList, "Pokedex">) => {
  const prevSearchRef = useRef("")
  const [search, setSearch] = useState("")
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [types, setTypes] = useState<PokemonType[]>([])
  const [selectedType, setSelectedType] = useState("all")
  const [pokemonLimit, setPokemonLimit] = useState(LIMIT)

  useEffect(() => {
    PokedexService.getPokemonsWithPagination(LIMIT).then(({ data }) => setPokemonList(data.results))

    PokedexService.getAllTypes().then(({ data }) => {
      data.results.unshift({ name: "all", url: "" })

      // Remove types that do not have pokémon coming from the API
      const typesToRemove = ["unknown", "shadow"]
      const typesFiltered = data.results.filter(
        (type: { name: string }) => !typesToRemove.includes(type.name)
      )

      setTypes(typesFiltered) // Adds type "all" to be one of the filterable options
    })
  }, [])

  const loadPokemons = useCallback(
    async (query: string | null, type: string | null = null) => {
      if (query === "" || type === "all") {
        await PokedexService.getPokemonsWithPagination(pokemonLimit).then(({ data }) =>
          setPokemonList([...data.results])
        )
      } else if (query !== null) {
        prevSearchRef.current = query
        await PokedexService.getPokemonByQuery(query.replace(/ /g, "-").toLowerCase())
          .then(({ data }) => setPokemonList([data]))
          .catch(() => setPokemonList([]))
      } else if (query === null && type === null) {
        await PokedexService.getPokemonsWithPagination(LIMIT, pokemonLimit).then(({ data }) => {
          setPokemonList((prevPokemonList) => [...prevPokemonList, ...data.results])
          setPokemonLimit(pokemonLimit + LIMIT)
        })
      } else if (type !== null) {
        await PokedexService.getPokemonsByType(type).then(({ data }) =>
          setPokemonList([...data.pokemon.map((pokemon: { pokemon: Pokemon }) => pokemon.pokemon)])
        )
      }
    },
    [pokemonLimit]
  )

  function searchPokemon(search: string | null) {
    setSearch(search ?? "")
    loadPokemons(search)
    setSelectedType("all")
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.TopArea>
          <S.SearchView>
            <S.SearchInput
              keyboardType="default"
              spellCheck={false}
              placeholder="Search by name or number"
              value={search}
              onChangeText={(text) => setSearch(text)}
              onKeyPress={(e) => (e.nativeEvent.key === "Enter" ? searchPokemon(search) : null)}
            />

            <S.SearchButton onPress={() => searchPokemon(search)} disabled={search === ""}>
              <S.SearchText style={{ opacity: search === "" ? 0.3 : 1 }}>🔍</S.SearchText>
            </S.SearchButton>
          </S.SearchView>

          <RNPickerSelect
            items={types.map((item, index) => ({
              key: index,
              value: item.name,
              label: item.name.replace(/^\w{1}/, (letter) => letter.toUpperCase()), // Capitalize the first letter
              color: getPropsByPokemonType(item.name).backgroundColor,
            }))}
            placeholder={{}}
            value={selectedType}
            onValueChange={(value) => {
              setSelectedType(value)
              loadPokemons(null, value)
            }}
          >
            <TypeDropdown type={selectedType} />
          </RNPickerSelect>
        </S.TopArea>

        <S.PokemonCount>
          <SvgCss xml={getPropsByPokemonType(selectedType).icon} width={32} height={32} />
          <S.Counter>{pokemonList.length}</S.Counter>
        </S.PokemonCount>

        {pokemonList.length > 0 && (
          <S.BottomArea>
            <S.PokemonList>
              <S.PokemonCards>
                {pokemonList.map((pokemon, index) => (
                  <Card key={index} pokemon={pokemon} />
                ))}
              </S.PokemonCards>

              {selectedType === "all" && pokemonList.length >= LIMIT && (
                <Button text="Load more Pokémon" onPress={() => loadPokemons(null)} />
              )}
            </S.PokemonList>
          </S.BottomArea>
        )}

        {pokemonList.length === 0 && (
          <S.SearchError>
            <S.TextNotFound>
              Pokémon{" "}
              <S.StrongText>
                {'"'}
                {prevSearchRef.current}
                {'"'}
              </S.StrongText>{" "}
              not found!{" "}
            </S.TextNotFound>
            <S.SmallText>
              Try again by searching for your full name or your Pokédex number.
            </S.SmallText>
            <Button text="Back to list" onPress={() => searchPokemon("")} />
          </S.SearchError>
        )}
      </S.Container>
    </S.Wrapper>
  )
}
