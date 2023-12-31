import { render } from "@testing-library/react-native"

import TypeDropdown from "."

describe("<TypeDropdown />", () => {
  it("should render the arrow icon and be visible", async () => {
    const { findByTestId } = render(<TypeDropdown type="normal" />)

    const arrowIcon = await findByTestId(/arrowIcon/i)

    expect(arrowIcon).toBeOnTheScreen()
    expect(arrowIcon).toBeVisible()
  })

  it("should render dark icon and text with correct typeColor prop and color style", () => {
    const { getByText, getByTestId } = render(<TypeDropdown type="dark" />)

    const darkText = getByText(/dark/i)

    expect(getByTestId(/dark-icon/i)).toBeOnTheScreen()
    expect(darkText).toBeOnTheScreen()
    expect(darkText).toHaveProp("typeColor", "#5A5366")
    expect(darkText).toHaveStyle({ color: "#5A5366" })
  })

  it("should render steel icon and text with correct typeColor prop and color style", () => {
    const { getByText, getByTestId } = render(<TypeDropdown type="steel" />)

    const steelText = getByText(/steel/i)

    expect(getByTestId(/steel-icon/i)).toBeOnTheScreen()
    expect(steelText).toBeOnTheScreen()
    expect(steelText).toHaveProp("typeColor", "#5A8EA1")
    expect(steelText).toHaveStyle({ color: "#5A8EA1" })
  })

  it("should render fairy icon and text with correct typeColor prop and color style", () => {
    const { getByText, getByTestId } = render(<TypeDropdown type="fairy" />)

    const fairyText = getByText(/fairy/i)

    expect(getByTestId(/fairy-icon/i)).toBeOnTheScreen()
    expect(fairyText).toBeOnTheScreen()
    expect(fairyText).toHaveProp("typeColor", "#EC8FE6")
    expect(fairyText).toHaveStyle({ color: "#EC8FE6" })
  })
})
