import styled from "styled-components/native"
import { LinearGradient } from "expo-linear-gradient"

export const Wrapper = styled.ScrollView``

export const Container = styled(LinearGradient)`
  align-items: center;
  justify-content: center;
`

export const PokemonCard = styled.View`
  margin: 16px;
  padding: 16px;
  background-color: #f2f2f2;
  border-radius: 12px;
  border: 2px solid #212121;
`

export const PokemonTitle = styled.View`
  justify-content: center;
  align-items: center;
`

export const PokemonName = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-transform: capitalize;
`

export const ImageView = styled.View`
  align-items: center;
`

export const PokemonImage = styled.Image``

export const PokemonData = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
`

export const DataView = styled.View`
  justify-content: center;
  align-items: center;
  margin: 16px 0 0;
  padding: 0 24px;
`

export const DataTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
`

export const InfoText = styled.Text`
  text-transform: capitalize;
`

export const PokemonStats = styled.View`
  padding: 0 16px;
  margin: 16px 0 0;
`

export const Stat = styled.View`
  gap: 8px;
  margin: 0 0 16px;
`

export const StatInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`
