import { useState, useEffect } from "react"

import { getPropsByPokemonType } from "../../utils"

import * as S from "./styles"

type StatBarProps = {
  type: string
  stat: string
  baseStat: number
}

type baseStats = {
  [key: string]: number
}

// data taken from the website: https://pokemondb.net/pokedex/all
const MAX_BASE_STAT: baseStats = {
  hp: 255,
  attack: 190,
  defense: 250,
  "special-attack": 194,
  "special-defense": 250,
  speed: 200,
}

const StatBar = ({ type, stat, baseStat }: StatBarProps) => {
  const [completed, setCompleted] = useState(0)

  useEffect(() => {
    setCompleted((baseStat * 100) / MAX_BASE_STAT[stat])
  }, [baseStat, stat])

  return (
    <S.ParentBar>
      <S.ChildBar bgColor={getPropsByPokemonType(type).backgroundColor} completed={completed} />
    </S.ParentBar>
  )
}

export default StatBar
