import { render } from "@testing-library/react-native"

import BadgeType from "."

describe("<BadgeType />", () => {
  it("should render the grass icon and text with the correct colors", () => {
    const { getByTestId, getByText } = render(<BadgeType type="grass" />)

    const gradientView = getByTestId(/gradientView/i)

    expect(gradientView).toBeOnTheScreen()
    expect(gradientView).toHaveProp("colors", [4284726107, 4284726107])
    expect(getByTestId(/grass-icon/i)).toBeOnTheScreen()
    expect(getByText(/grass/i)).toBeOnTheScreen()
  })

  it("should render the fire icon and text with the correct colors", () => {
    const { getByTestId, getByText } = render(<BadgeType type="fire" />)

    const gradientView = getByTestId(/gradientView/i)

    expect(gradientView).toBeOnTheScreen()
    expect(gradientView).toHaveProp("colors", [4294941780, 4294941780])
    expect(getByTestId(/fire-icon/i)).toBeOnTheScreen()
    expect(getByText(/fire/i)).toBeOnTheScreen()
  })

  it("should render the water icon and text with the correct colors", () => {
    const { getByTestId, getByText } = render(<BadgeType type="water" />)

    const gradientView = getByTestId(/gradientView/i)

    expect(gradientView).toBeOnTheScreen()
    expect(gradientView).toHaveProp("colors", [4283273429, 4283273429])
    expect(getByTestId(/water-icon/i)).toBeOnTheScreen()
    expect(getByText(/water/i)).toBeOnTheScreen()
  })
})
