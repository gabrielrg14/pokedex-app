import { render, fireEvent } from "@testing-library/react-native"

import { Button } from "."

describe("<Button />", () => {
  it("should render the button and the passed text", () => {
    const { getByRole, getByText } = render(<Button text="Test" />)

    expect(getByRole(/button/i)).toBeOnTheScreen()
    expect(getByText(/test/i)).toBeOnTheScreen()
  })

  it("should call the onPress when the button is pressed", () => {
    const onPressMock = jest.fn()

    const { getByRole } = render(<Button text="Test" onPress={onPressMock} />)

    fireEvent.press(getByRole(/button/i))

    expect(onPressMock).toHaveBeenCalled()
  })
})
