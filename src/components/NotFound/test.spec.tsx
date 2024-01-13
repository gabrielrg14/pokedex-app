import { render } from "@testing-library/react-native"

import { NotFound } from "."

describe("<NotFound />", () => {
  it("should render all texts", () => {
    const { getByText } = render(<NotFound />)

    expect(getByText(/pokémon not found/i)).toBeOnTheScreen()
    expect(getByText(/the pokémon you are looking for is not here/i)).toBeOnTheScreen()
    expect(getByText(/go to pokédex/i)).toBeOnTheScreen()
  })

  it("should render the psyduck image", () => {
    const { getByTestId } = render(<NotFound />)

    expect(getByTestId(/psyduckImage/i)).toBeOnTheScreen()
  })

  it("should render the button with your text", () => {
    const { getByRole } = render(<NotFound />)

    const button = getByRole(/button/i)

    expect(button).toBeOnTheScreen()
    expect(button).toHaveTextContent(/go to pokédex/i)
  })
})
