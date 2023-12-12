export interface Sprites {
  front_default: string
  front_shiny: string
  other: {
    "official-artwork": {
      front_default: string
      front_shiny: string
    }
  }
}

export interface Type {
  type: {
    name: string
    url: string
  }
}

export interface Ability {
  ability: {
    name: string
    url: string
  }
}

export interface Stat {
  base_stat: number
  stat: {
    name: string
    url: string
  }
}

export interface Pokemon {
  id: number
  name: string
  url: string
  sprites: Sprites
  height: number
  weight: number
  types: Type[]
  abilities: Ability[]
  stats: Stat[]
}
