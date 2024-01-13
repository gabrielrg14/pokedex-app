export type Sprites = {
  front_default: string
  front_shiny: string
  other: {
    "official-artwork": {
      front_default: string
      front_shiny: string
    }
  }
}

export type Type = {
  name: string
  url: string
}

export type PokemonType = {
  type: Type
}

export type Ability = {
  ability: {
    name: string
    url: string
  }
}

export type Stat = {
  base_stat: number
  stat: {
    name: string
    url: string
  }
}

export type Pokemon = {
  id: number
  name: string
  url: string
  sprites: Sprites
  height: number
  weight: number
  types: PokemonType[]
  abilities: Ability[]
  stats: Stat[]
}
