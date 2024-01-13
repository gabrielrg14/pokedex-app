import * as Linking from "expo-linking"

import * as S from "./styles"

export const Footer = () => {
  return (
    <S.Wrapper>
      <S.Text>
        {new Date().getFullYear()} &copy; Powered by{" "}
        <S.ApiLink
          onPress={() => Linking.openURL("https://pokeapi.co/")}
          aria-label="Go to the PokéAPI"
        >
          PokéAPI
        </S.ApiLink>
      </S.Text>
    </S.Wrapper>
  )
}
