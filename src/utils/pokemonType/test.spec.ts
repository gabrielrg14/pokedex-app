import { getPropsByPokemonType } from "."

describe("pokemonType", () => {
  describe("getPropsByPokemonType", () => {
    it("should return the correct normal type props", () => {
      const props = getPropsByPokemonType("normal")

      expect(props.background).toEqual(["#9099A1", "#9099A1"])
      expect(props.backgroundColor).toEqual("#9099A1")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct fire type props", () => {
      const props = getPropsByPokemonType("fire")

      expect(props.background).toEqual(["#FF9C54", "#FF9C54"])
      expect(props.backgroundColor).toEqual("#FF9C54")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct water type props", () => {
      const props = getPropsByPokemonType("water")

      expect(props.background).toEqual(["#4D90D5", "#4D90D5"])
      expect(props.backgroundColor).toEqual("#4D90D5")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct electric type props", () => {
      const props = getPropsByPokemonType("electric")

      expect(props.background).toEqual(["#F3D23B", "#F3D23B"])
      expect(props.backgroundColor).toEqual("#F3D23B")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct grass type props", () => {
      const props = getPropsByPokemonType("grass")

      expect(props.background).toEqual(["#63BB5B", "#63BB5B"])
      expect(props.backgroundColor).toEqual("#63BB5B")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct ice type props", () => {
      const props = getPropsByPokemonType("ice")

      expect(props.background).toEqual(["#74CEC0", "#74CEC0"])
      expect(props.backgroundColor).toEqual("#74CEC0")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct fighting type props", () => {
      const props = getPropsByPokemonType("fighting")

      expect(props.background).toEqual(["#CE4069", "#CE4069"])
      expect(props.backgroundColor).toEqual("#CE4069")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct poison type props", () => {
      const props = getPropsByPokemonType("poison")

      expect(props.background).toEqual(["#AB6AC8", "#AB6AC8"])
      expect(props.backgroundColor).toEqual("#AB6AC8")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct ground type props", () => {
      const props = getPropsByPokemonType("ground")

      expect(props.background).toEqual(["#D97746", "#D97746"])
      expect(props.backgroundColor).toEqual("#D97746")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct flying type props", () => {
      const props = getPropsByPokemonType("flying")

      expect(props.background).toEqual(["#92AADE", "#92AADE"])
      expect(props.backgroundColor).toEqual("#92AADE")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct psychic type props", () => {
      const props = getPropsByPokemonType("psychic")

      expect(props.background).toEqual(["#F97176", "#F97176"])
      expect(props.backgroundColor).toEqual("#F97176")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct bug type props", () => {
      const props = getPropsByPokemonType("bug")

      expect(props.background).toEqual(["#90C12C", "#90C12C"])
      expect(props.backgroundColor).toEqual("#90C12C")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct rock type props", () => {
      const props = getPropsByPokemonType("rock")

      expect(props.background).toEqual(["#C7B78B", "#C7B78B"])
      expect(props.backgroundColor).toEqual("#C7B78B")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct ghost type props", () => {
      const props = getPropsByPokemonType("ghost")

      expect(props.background).toEqual(["#5269AC", "#5269AC"])
      expect(props.backgroundColor).toEqual("#5269AC")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct dragon type props", () => {
      const props = getPropsByPokemonType("dragon")

      expect(props.background).toEqual(["#096DC4", "#096DC4"])
      expect(props.backgroundColor).toEqual("#096DC4")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct dark type props", () => {
      const props = getPropsByPokemonType("dark")

      expect(props.background).toEqual(["#5A5366", "#5A5366"])
      expect(props.backgroundColor).toEqual("#5A5366")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct steel type props", () => {
      const props = getPropsByPokemonType("steel")

      expect(props.background).toEqual(["#5A8EA1", "#5A8EA1"])
      expect(props.backgroundColor).toEqual("#5A8EA1")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct fairy type props", () => {
      const props = getPropsByPokemonType("fairy")

      expect(props.background).toEqual(["#EC8FE6", "#EC8FE6"])
      expect(props.backgroundColor).toEqual("#EC8FE6")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct default type props", () => {
      const props = getPropsByPokemonType("")

      expect(props.background).toEqual(["#000", "#000"])
      expect(props.backgroundColor).toEqual("#000")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })
  })
})
