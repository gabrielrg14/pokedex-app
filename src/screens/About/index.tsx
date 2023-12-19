import { StackScreenProps } from "@react-navigation/stack"

import { ParamList } from "../../@types"

import * as S from "./styles"

export const About = ({}: StackScreenProps<ParamList, "About">) => {
  return (
    <S.Wrapper>
      <S.Title>About the Pokédex</S.Title>

      <S.Description>
        This project was developed with the aim of putting into practice the knowledge acquired in
        React Native, React Navigation, Expo, TypeScript, Styled Components, Zustand and Async
        Storage through a fun theme that is one of the creator&apos;s passions: Pokémon!
      </S.Description>

      <S.Description>
        Over time, the Pokédex will receive updates that will implement improvements in the search
        filters and display of Pokémon information.
      </S.Description>

      <S.AboutImage
        source={require(`../../../assets/about.png`)}
        width={200}
        height={200}
        alt="Pokémon thinking"
      />
    </S.Wrapper>
  )
}
