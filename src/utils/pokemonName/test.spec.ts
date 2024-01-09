import { formatPokemonName } from "."

describe("pokemonName", () => {
  describe("formatPokemonName", () => {
    it("should return Bulbasaur formatted when passing bulbasaur", () => {
      expect(formatPokemonName("bulbasaur")).toBe("Bulbasaur")
    })

    it("should return Kommo O formatted when passing kommo-o", () => {
      expect(formatPokemonName("kommo-o")).toBe("Kommo O")
    })

    it("should return Charizard Mega X formatted when passing charizard-mega-x", () => {
      expect(formatPokemonName("charizard-mega-x")).toBe("Charizard Mega X")
    })

    it("should return Zygarde 10 Power Construct formatted when passing zygarde-10-power-construct", () => {
      expect(formatPokemonName("zygarde-10-power-construct")).toBe("Zygarde 10 Power Construct")
    })
  })
})
