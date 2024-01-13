import { TouchableOpacityProps } from "react-native"

import * as S from "./styles"

type ButtonProps = {
  text: string
}

export const Button = ({ text, ...rest }: TouchableOpacityProps & ButtonProps) => {
  return (
    <S.Button accessibilityRole="button" {...rest}>
      <S.Text>{text}</S.Text>
    </S.Button>
  )
}
