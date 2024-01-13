import { render } from "@testing-library/react-native"

import { PokemonNumber } from "."

describe("<PokemonNumber />", () => {
  it("should render the pokémon number with #", () => {
    const { getByText } = render(<PokemonNumber number={3} />)

    const number3 = getByText(/3/i)

    expect(number3).toBeOnTheScreen()
    expect(number3).toHaveTextContent(/#/i)
  })

  it("should render #0001 when passing the number 1", () => {
    const { getByText } = render(<PokemonNumber number={1} />)

    const number1 = getByText(/1/i)

    expect(number1).toBeOnTheScreen()
    expect(number1).toHaveTextContent(/#0001/i)
  })

  it("should render #0010 when passing the number 10", () => {
    const { getByText } = render(<PokemonNumber number={10} />)

    const number10 = getByText(/10/i)

    expect(number10).toBeOnTheScreen()
    expect(number10).toHaveTextContent(/#0010/i)
  })

  it("should render #0100 when passing the number 100", () => {
    const { getByText } = render(<PokemonNumber number={100} />)

    const number100 = getByText(/100/i)

    expect(number100).toBeOnTheScreen()
    expect(number100).toHaveTextContent(/#0100/i)
  })

  it("should render #1000 when passing the number 1000", () => {
    const { getByText } = render(<PokemonNumber number={1000} />)

    const number1000 = getByText(/1000/i)

    expect(number1000).toBeOnTheScreen()
    expect(number1000).toHaveTextContent(/#1000/i)
  })

  it("should render #10000 when passing the number 10000", () => {
    const { getByText } = render(<PokemonNumber number={10000} />)

    const number10000 = getByText(/10000/i)

    expect(number10000).toBeOnTheScreen()
    expect(number10000).toHaveTextContent(/#10000/i)
  })
})
