import { render, fireEvent } from "@testing-library/react-native"
import * as Linking from "expo-linking"

import { Footer } from "."

describe("<Footer />", () => {
  it("should render the powered by text and the link to the PokéAPI", () => {
    const { getByText } = render(<Footer />)

    const apiLink = getByText(/pokéapi/i)

    expect(getByText(/powered by/i)).toBeOnTheScreen()
    expect(apiLink).toBeOnTheScreen()
    expect(apiLink).toHaveAccessibleName(/go to the pokéapi/i)
  })

  it("should call the openURL function when the link to the PokéAPI is pressed", () => {
    const { getByText } = render(<Footer />)

    const openURL = jest.spyOn(Linking, "openURL")

    fireEvent.press(getByText(/pokéapi/i))

    expect(openURL).toHaveBeenCalledWith("https://pokeapi.co/")
  })
})
