import { IPokemonType } from "../../@types"
import { BadgeType } from "../BadgeType"

import * as S from "./styles"

type RowTypesProps = {
  types?: IPokemonType[]
}

export const RowTypes = ({ types }: RowTypesProps) => {
  return (
    <S.Wrapper>
      {types?.map((item, index) => (
        <S.View key={index}>
          <BadgeType type={item.type.name} />
        </S.View>
      ))}
    </S.Wrapper>
  )
}
