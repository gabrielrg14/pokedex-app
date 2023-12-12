import styled from "styled-components/native"
import { LinearGradient } from "expo-linear-gradient"

export const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const GradientView = styled(LinearGradient)`
  padding: 8px 16px;
  background-color: #212121;
  border-radius: 5px;
`

export const Type = styled.Text`
  color: #fff;
  text-transform: capitalize;
  font-size: 14px;
`
