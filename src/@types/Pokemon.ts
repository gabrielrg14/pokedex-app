export type ISprites = {
  front_default: string
  front_shiny: string
  other: {
    "official-artwork": {
      front_default: string
      front_shiny: string
    }
  }
}

export type IType = {
  name: string
  url: string
}

export type IPokemonType = {
  type: IType
}

export type IAbility = {
  ability: {
    name: string
    url: string
  }
}

export type IStat = {
  base_stat: number
  stat: {
    name: string
    url: string
  }
}

export type IPokemon = {
  id: number
  name: string
  url: string
  sprites: ISprites
  height: number
  weight: number
  types: IPokemonType[]
  abilities: IAbility[]
  stats: IStat[]
}
