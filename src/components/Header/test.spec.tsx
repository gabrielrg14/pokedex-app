import { render } from "@testing-library/react-native"

import Header from "."

describe("<Header />", () => {
  it("should render the pokédex image and be visible", () => {
    const { getByTestId } = render(<Header />)

    expect(getByTestId("pokedexImage")).toBeOnTheScreen()
  })
})
