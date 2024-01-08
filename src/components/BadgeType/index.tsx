import { SvgCss } from "react-native-svg"

import { getPropsByPokemonType } from "../../utils"

import * as S from "./styles"

type BadgeTypeProps = {
  type: string
}

const BadgeType = ({ type }: BadgeTypeProps) => {
  const typeProps = getPropsByPokemonType(type)

  return (
    <S.Wrapper>
      <SvgCss testID={`${type}-icon`} xml={typeProps.icon} width="32" height="32" />
      <S.GradientView
        testID="gradientView"
        colors={typeProps.background}
        locations={[0.5, 0.5]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <S.Type>{type}</S.Type>
      </S.GradientView>
    </S.Wrapper>
  )
}

export default BadgeType
