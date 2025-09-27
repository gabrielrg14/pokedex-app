import { render } from "@testing-library/react-native"
import { typeMocks } from "../../test/mocks"

import { StatBar } from "."

describe("<StatBar />", () => {
  it("should render the parentBar and childBar views", () => {
    const { getByTestId } = render(
      <StatBar type={typeMocks.types.normal.name} stat="hp" baseStat={255} />
    )

    expect(getByTestId(/parentBar/i)).toBeOnTheScreen()
    expect(getByTestId(/childBar/i)).toBeOnTheScreen()
  })

  it("should render the hp status childBar of a flying type with the correct props, color and width", () => {
    const { getByTestId } = render(
      <StatBar type={typeMocks.types.flying.name} stat="hp" baseStat={95} />
    )

    const childBar = getByTestId(/childBar/i)

    expect(childBar).toHaveProp("completed", 37.254901960784316)
    expect(childBar).toHaveProp("bgColor", "#92AADE")
    expect(childBar).toHaveStyle({ backgroundColor: "#92AADE", width: "37.254901960784316%" })
  })

  it("should render the attack status childBar of a psychic type with the correct props, color and width", () => {
    const { getByTestId } = render(
      <StatBar type={typeMocks.types.psychic.name} stat="attack" baseStat={50} />
    )

    const childBar = getByTestId(/childBar/i)

    expect(childBar).toHaveProp("completed", 26.31578947368421)
    expect(childBar).toHaveProp("bgColor", "#F97176")
    expect(childBar).toHaveStyle({ backgroundColor: "#F97176", width: "26.31578947368421%" })
  })

  it("should render the defense status childBar of a bug type with the correct props, color and width", () => {
    const { getByTestId } = render(
      <StatBar type={typeMocks.types.bug.name} stat="defense" baseStat={230} />
    )

    const childBar = getByTestId(/childBar/i)

    expect(childBar).toHaveProp("completed", 92)
    expect(childBar).toHaveProp("bgColor", "#90C12C")
    expect(childBar).toHaveStyle({ backgroundColor: "#90C12C", width: "92%" })
  })

  it("should render the special-attack status childBar of a rock type with the correct props, color and width", () => {
    const { getByTestId } = render(
      <StatBar type={typeMocks.types.rock.name} stat="special-attack" baseStat={95} />
    )

    const childBar = getByTestId(/childBar/i)

    expect(childBar).toHaveProp("completed", 48.96907216494845)
    expect(childBar).toHaveProp("bgColor", "#C7B78B")
    expect(childBar).toHaveStyle({ backgroundColor: "#C7B78B", width: "48.96907216494845%" })
  })

  it("should render the special-defense status childBar of a ghost type with the correct props, color and width", () => {
    const { getByTestId } = render(
      <StatBar type={typeMocks.types.ghost.name} stat="special-defense" baseStat={75} />
    )

    const childBar = getByTestId(/childBar/i)

    expect(childBar).toHaveProp("completed", 30)
    expect(childBar).toHaveProp("bgColor", "#5269AC")
    expect(childBar).toHaveStyle({ backgroundColor: "#5269AC", width: "30%" })
  })

  it("should render the speed status childBar of a dragon type with the correct props, color and width", () => {
    const { getByTestId } = render(
      <StatBar type={typeMocks.types.dragon.name} stat="speed" baseStat={80} />
    )

    const childBar = getByTestId(/childBar/i)

    expect(childBar).toHaveProp("completed", 40)
    expect(childBar).toHaveProp("bgColor", "#096DC4")
    expect(childBar).toHaveStyle({ backgroundColor: "#096DC4", width: "40%" })
  })
})
