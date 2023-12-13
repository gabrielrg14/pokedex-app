import styled from "styled-components/native"

type TypeProps = {
  typeColor: string
}

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 10px 16px;
`

export const TypeItem = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const Type = styled.Text<TypeProps>`
  color: ${(props) => props.typeColor};
  text-transform: capitalize;
  font-size: 16px;
`
