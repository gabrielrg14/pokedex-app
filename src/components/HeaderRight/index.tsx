import { useStore } from "../../store"

import * as S from "./styles"

const HeaderRight = () => {
  const { sprite, toggleSprite } = useStore()

  return (
    <S.Icon
      name="auto-awesome"
      size={28}
      color={sprite === "front_default" ? "#FFF" : "#fbc418"}
      onPress={() => toggleSprite()}
    />
  )
}

export default HeaderRight
