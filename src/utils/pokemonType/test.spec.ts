import { typeMocks } from "../../test/mocks"

import { getPropsByPokemonType } from "."

describe("pokemonType", () => {
  describe("getPropsByPokemonType", () => {
    it("should return the correct normal type props", () => {
      const props = getPropsByPokemonType(typeMocks.types.normal.name)

      expect(props.background).toEqual(["#9099A1", "#9099A1"])
      expect(props.backgroundColor).toEqual("#9099A1")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct fire type props", () => {
      const props = getPropsByPokemonType(typeMocks.types.fire.name)

      expect(props.background).toEqual(["#FF9C54", "#FF9C54"])
      expect(props.backgroundColor).toEqual("#FF9C54")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct water type props", () => {
      const props = getPropsByPokemonType(typeMocks.types.water.name)

      expect(props.background).toEqual(["#4D90D5", "#4D90D5"])
      expect(props.backgroundColor).toEqual("#4D90D5")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct electric type props", () => {
      const props = getPropsByPokemonType(typeMocks.types.electric.name)

      expect(props.background).toEqual(["#F3D23B", "#F3D23B"])
      expect(props.backgroundColor).toEqual("#F3D23B")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct grass type props", () => {
      const props = getPropsByPokemonType(typeMocks.types.grass.name)

      expect(props.background).toEqual(["#63BB5B", "#63BB5B"])
      expect(props.backgroundColor).toEqual("#63BB5B")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct ice type props", () => {
      const props = getPropsByPokemonType(typeMocks.types.ice.name)

      expect(props.background).toEqual(["#74CEC0", "#74CEC0"])
      expect(props.backgroundColor).toEqual("#74CEC0")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct fighting type props", () => {
      const props = getPropsByPokemonType(typeMocks.types.fighting.name)

      expect(props.background).toEqual(["#CE4069", "#CE4069"])
      expect(props.backgroundColor).toEqual("#CE4069")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct poison type props", () => {
      const props = getPropsByPokemonType(typeMocks.types.poison.name)

      expect(props.background).toEqual(["#AB6AC8", "#AB6AC8"])
      expect(props.backgroundColor).toEqual("#AB6AC8")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct ground type props", () => {
      const props = getPropsByPokemonType(typeMocks.types.ground.name)

      expect(props.background).toEqual(["#D97746", "#D97746"])
      expect(props.backgroundColor).toEqual("#D97746")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct flying type props", () => {
      const props = getPropsByPokemonType(typeMocks.types.flying.name)

      expect(props.background).toEqual(["#92AADE", "#92AADE"])
      expect(props.backgroundColor).toEqual("#92AADE")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct psychic type props", () => {
      const props = getPropsByPokemonType(typeMocks.types.psychic.name)

      expect(props.background).toEqual(["#F97176", "#F97176"])
      expect(props.backgroundColor).toEqual("#F97176")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct bug type props", () => {
      const props = getPropsByPokemonType(typeMocks.types.bug.name)

      expect(props.background).toEqual(["#90C12C", "#90C12C"])
      expect(props.backgroundColor).toEqual("#90C12C")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct rock type props", () => {
      const props = getPropsByPokemonType(typeMocks.types.rock.name)

      expect(props.background).toEqual(["#C7B78B", "#C7B78B"])
      expect(props.backgroundColor).toEqual("#C7B78B")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct ghost type props", () => {
      const props = getPropsByPokemonType(typeMocks.types.ghost.name)

      expect(props.background).toEqual(["#5269AC", "#5269AC"])
      expect(props.backgroundColor).toEqual("#5269AC")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct dragon type props", () => {
      const props = getPropsByPokemonType(typeMocks.types.dragon.name)

      expect(props.background).toEqual(["#096DC4", "#096DC4"])
      expect(props.backgroundColor).toEqual("#096DC4")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct dark type props", () => {
      const props = getPropsByPokemonType(typeMocks.types.dark.name)

      expect(props.background).toEqual(["#5A5366", "#5A5366"])
      expect(props.backgroundColor).toEqual("#5A5366")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct steel type props", () => {
      const props = getPropsByPokemonType(typeMocks.types.steel.name)

      expect(props.background).toEqual(["#5A8EA1", "#5A8EA1"])
      expect(props.backgroundColor).toEqual("#5A8EA1")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct fairy type props", () => {
      const props = getPropsByPokemonType(typeMocks.types.fairy.name)

      expect(props.background).toEqual(["#EC8FE6", "#EC8FE6"])
      expect(props.backgroundColor).toEqual("#EC8FE6")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })

    it("should return the correct default type props", () => {
      const props = getPropsByPokemonType(typeMocks.typeAll.name)

      expect(props.background).toEqual(["#000", "#000"])
      expect(props.backgroundColor).toEqual("#000")
      expect(props.color).toEqual("#FFF")
      expect(props.icon).toBeTruthy()
    })
  })
})
