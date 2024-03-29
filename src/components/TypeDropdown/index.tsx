import { SvgCss } from "react-native-svg"
import { MaterialIcons } from "@expo/vector-icons"

import { getPropsByPokemonType } from "../../utils"

import * as S from "./styles"

type TypeDropdownProps = {
  type: string
}

export const TypeDropdown = ({ type }: TypeDropdownProps) => {
  return (
    <S.Wrapper>
      <S.TypeItem>
        <SvgCss
          testID={`${type}-icon`}
          xml={getPropsByPokemonType(type).icon}
          width={32}
          height={32}
        />
        <S.Type typeColor={getPropsByPokemonType(type).backgroundColor}>{type}</S.Type>
      </S.TypeItem>
      <MaterialIcons testID="arrowIcon" name="arrow-drop-down" size={32} color={"#3e6cbd"} />
    </S.Wrapper>
  )
}
