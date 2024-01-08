import { render } from "@testing-library/react-native"

import Card from "."

const venusaurMock = {
  id: 3,
  name: "venusaur",
  url: "",
  sprites: {
    front_default: "",
    front_shiny: "",
    other: {
      "official-artwork": {
        front_default: "",
        front_shiny: "",
      },
    },
  },
  height: 20,
  weight: 1000,
  types: [],
  abilities: [],
  stats: [],
}

describe("<Card />", () => {
  it("should render the pokemon number, name and image", async () => {
    const { findByTestId, getByText } = render(<Card pokemon={venusaurMock} />)

    expect(await findByTestId(/pokemonImage/i)).toBeOnTheScreen()
    expect(getByText(/#0003/i)).toBeOnTheScreen()
    expect(getByText(/venusaur/i)).toBeOnTheScreen()
  })

  it("should render the button with an accessible name and the name of the pokemon", () => {
    const { getByRole } = render(<Card pokemon={venusaurMock} />)

    const button = getByRole("button", { name: /venusaur/i })

    expect(button).toBeOnTheScreen()
    expect(button).toHaveAccessibleName(/venusaur/i)
    expect(button).toHaveTextContent(/venusaur/i)
  })
})
