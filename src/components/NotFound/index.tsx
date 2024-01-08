import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

import { ParamList } from "../../@types"

import Button from "../../components/Button"

import * as S from "./styles"

const NotFound = () => {
  const navigation = useNavigation<StackNavigationProp<ParamList>>()

  return (
    <S.Wrapper>
      <S.TextNotFound>Pokémon not found!</S.TextNotFound>
      <S.TextNotHere>Unfortunately the Pokémon you are looking for is not here.</S.TextNotHere>
      <S.PsyduckImage
        testID="psyduckImage"
        source={require("../../../assets/psyduck.jpg")}
        alt="Psyduck confused"
      />
      <Button
        text="Go to Pokédex"
        onPress={() => navigation.navigate("Pokedex")}
        aria-label="Go to Pokédex"
      />
    </S.Wrapper>
  )
}

export default NotFound
