import { IType } from "../../@types"
import { pokemonMocks } from "./pokemon"

const typeAll: IType = {
  name: "all",
  url: "",
}

const normal: IType = {
  name: "normal",
  url: "https://pokeapi.co/api/v2/type/1/",
}

const fighting: IType = {
  name: "fighting",
  url: "https://pokeapi.co/api/v2/type/2/",
}

const flying: IType = {
  name: "flying",
  url: "https://pokeapi.co/api/v2/type/3/",
}

const poison: IType = {
  name: "poison",
  url: "https://pokeapi.co/api/v2/type/4/",
}

const ground: IType = {
  name: "ground",
  url: "https://pokeapi.co/api/v2/type/5/",
}

const rock: IType = {
  name: "rock",
  url: "https://pokeapi.co/api/v2/type/6/",
}

const bug: IType = {
  name: "bug",
  url: "https://pokeapi.co/api/v2/type/7/",
}

const ghost: IType = {
  name: "ghost",
  url: "https://pokeapi.co/api/v2/type/8/",
}

const steel: IType = {
  name: "steel",
  url: "https://pokeapi.co/api/v2/type/9/",
}

const fire: IType = {
  name: "fire",
  url: "https://pokeapi.co/api/v2/type/10/",
}

const water: IType = {
  name: "water",
  url: "https://pokeapi.co/api/v2/type/11/",
}

const grass: IType = {
  name: "grass",
  url: "https://pokeapi.co/api/v2/type/12/",
}

const electric: IType = {
  name: "electric",
  url: "https://pokeapi.co/api/v2/type/13/",
}

const psychic: IType = {
  name: "psychic",
  url: "https://pokeapi.co/api/v2/type/14/",
}

const ice: IType = {
  name: "ice",
  url: "https://pokeapi.co/api/v2/type/15/",
}

const dragon: IType = {
  name: "dragon",
  url: "https://pokeapi.co/api/v2/type/16/",
}

const dark: IType = {
  name: "dark",
  url: "https://pokeapi.co/api/v2/type/17/",
}

const fairy: IType = {
  name: "fairy",
  url: "https://pokeapi.co/api/v2/type/18/",
}

const types = {
  normal,
  fighting,
  flying,
  poison,
  ground,
  rock,
  bug,
  ghost,
  steel,
  fire,
  water,
  grass,
  electric,
  psychic,
  ice,
  dragon,
  dark,
  fairy,
}

export const typeMocks = {
  types,
  typeAll,
  list: Object.values(types),
  arrayList: Object.values(types).map((type) => [type.name, type]),
  pokemonsByTypeArray: [
    [types.grass.name, pokemonMocks.venusaur],
    [types.fire.name, pokemonMocks.charizard],
    [types.water.name, pokemonMocks.blastoise],
  ],
}
