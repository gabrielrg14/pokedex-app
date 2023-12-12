import { TouchableOpacityProps } from "react-native"

import * as S from "./styles"

type ButtonProps = {
  text: string
}

const Button = ({ text, ...rest }: TouchableOpacityProps & ButtonProps) => {
  return (
    <S.Button {...rest}>
      <S.Text>{text}</S.Text>
    </S.Button>
  )
}

export default Button
