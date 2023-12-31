import styled from "styled-components/native"

export const Wrapper = styled.ScrollView``

export const Container = styled.View`
  padding: 24px;
`

export const TopArea = styled.View`
  justify-content: center;
  gap: 16px;
`

export const SearchView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const SearchInput = styled.TextInput`
  width: 80%;
  padding: 10px 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
  color: #000;
`

export const SearchButton = styled.TouchableOpacity`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 20px;
`

export const SearchText = styled.Text`
  font-size: 16px;
`

export const PokemonCount = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 24px 0;
`

export const Counter = styled.Text`
  font-size: 32px;
  color: #fbc418;
  text-shadow: 2px 2px 2px #3e6cbd;
`

export const BottomArea = styled.View`
  justify-content: center;
  align-items: stretch;
  gap: 24px;
`

export const PokemonList = styled.View``

export const PokemonCards = styled.View`
  gap: 24px;
  margin-bottom: 24px;
`

export const SearchError = styled.View`
  align-items: center;
`

export const TextNotFound = styled.Text`
  text-align: center;
  font-size: 18px;
`

export const StrongText = styled.Text`
  font-weight: bold;
`

export const SmallText = styled.Text`
  text-align: center;
  font-size: 12px;
  margin-bottom: 24px;
`
