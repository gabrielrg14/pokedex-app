import { render } from "@testing-library/react-native"

import HeaderRight from "."

describe("<HeaderRight />", () => {
  it("should render the sprite icon and be visible", async () => {
    const { findByTestId } = render(<HeaderRight />)

    const spriteIcon = await findByTestId("spriteIcon")

    expect(spriteIcon).toBeOnTheScreen()
    expect(spriteIcon).toBeVisible()
  })
})
