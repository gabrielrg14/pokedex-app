import { useStore } from "../../store"

import * as S from "./styles"

export const HeaderRight = () => {
  const { sprite, toggleSprite } = useStore()

  return (
    <S.Icon
      testID="spriteIcon"
      name="auto-awesome"
      size={28}
      color={sprite === "front_default" ? "#FFF" : "#fbc418"}
      onPress={() => toggleSprite()}
    />
  )
}
