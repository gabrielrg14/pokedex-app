import icons from "../../../assets/types"

export function getPropsByPokemonType(type: string) {
  switch (type) {
    case "normal":
      return {
        background: ["#9099A1", "#9099A1"],
        backgroundColor: "#9099A1",
        color: "#FFF",
        icon: icons.normal,
      }

    case "fire":
      return {
        background: ["#FF9C54", "#FF9C54"],
        backgroundColor: "#FF9C54",
        color: "#FFF",
        icon: icons.fire,
      }

    case "water":
      return {
        background: ["#4D90D5", "#4D90D5"],
        backgroundColor: "#4D90D5",
        color: "#FFF",
        icon: icons.water,
      }

    case "electric":
      return {
        background: ["#F3D23B", "#F3D23B"],
        backgroundColor: "#F3D23B",
        color: "#FFF",
        icon: icons.electric,
      }

    case "grass":
      return {
        background: ["#63BB5B", "#63BB5B"],
        backgroundColor: "#63BB5B",
        color: "#FFF",
        icon: icons.grass,
      }

    case "ice":
      return {
        background: ["#74CEC0", "#74CEC0"],
        backgroundColor: "#74CEC0",
        color: "#FFF",
        icon: icons.ice,
      }

    case "fighting":
      return {
        background: ["#CE4069", "#CE4069"],
        backgroundColor: "#CE4069",
        color: "#FFF",
        icon: icons.fighting,
      }

    case "poison":
      return {
        background: ["#AB6AC8", "#AB6AC8"],
        backgroundColor: "#AB6AC8",
        color: "#FFF",
        icon: icons.poison,
      }

    case "ground":
      return {
        background: ["#D97746", "#D97746"],
        backgroundColor: "#D97746",
        color: "#FFF",
        icon: icons.ground,
      }

    case "flying":
      return {
        background: ["#92AADE", "#92AADE"],
        backgroundColor: "#92AADE",
        color: "#FFF",
        icon: icons.flying,
      }

    case "psychic":
      return {
        background: ["#F97176", "#F97176"],
        backgroundColor: "#F97176",
        color: "#FFF",
        icon: icons.psychic,
      }

    case "bug":
      return {
        background: ["#90C12C", "#90C12C"],
        backgroundColor: "#90C12C",
        color: "#FFF",
        icon: icons.bug,
      }

    case "rock":
      return {
        background: ["#C7B78B", "#C7B78B"],
        backgroundColor: "#C7B78B",
        color: "#FFF",
        icon: icons.rock,
      }

    case "ghost":
      return {
        background: ["#5269AC", "#5269AC"],
        backgroundColor: "#5269AC",
        color: "#FFF",
        icon: icons.ghost,
      }

    case "dragon":
      return {
        background: ["#096DC4", "#096DC4"],
        backgroundColor: "#096DC4",
        color: "#FFF",
        icon: icons.dragon,
      }

    case "dark":
      return {
        background: ["#5A5366", "#5A5366"],
        backgroundColor: "#5A5366",
        color: "#FFF",
        icon: icons.dark,
      }

    case "steel":
      return {
        background: ["#5A8EA1", "#5A8EA1"],
        backgroundColor: "#5A8EA1",
        color: "#FFF",
        icon: icons.steel,
      }

    case "fairy":
      return {
        background: ["#EC8FE6", "#EC8FE6"],
        backgroundColor: "#EC8FE6",
        color: "#FFF",
        icon: icons.fairy,
      }

    default:
      return {
        background: ["#000", "#000"],
        backgroundColor: "#000",
        color: "#FFF",
        icon: icons.all,
      }
  }
}
