import { render } from "@testing-library/react-native"
import { pokemonMocks } from "../../test/mocks"

import { Card } from "."

describe("<Card />", () => {
  it("should render the pokemon number, name and image", async () => {
    const { findByTestId, getByText } = render(<Card pokemon={pokemonMocks.venusaur} />)

    expect(await findByTestId(/pokemonImage/i)).toBeOnTheScreen()
    expect(getByText(/#0003/i)).toBeOnTheScreen()
    expect(getByText(/venusaur/i)).toBeOnTheScreen()
  })

  it("should render the button with an accessible name and the name of the pokemon", async () => {
    const { findByRole } = render(<Card pokemon={pokemonMocks.venusaur} />)

    const button = await findByRole("button", { name: /venusaur/i })

    expect(button).toBeOnTheScreen()
    expect(button).toHaveAccessibleName(/venusaur/i)
    expect(button).toHaveTextContent(/venusaur/i)
  })
})
