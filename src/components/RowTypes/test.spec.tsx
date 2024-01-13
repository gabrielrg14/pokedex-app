import { render } from "@testing-library/react-native"
import { typeMocks } from "../../test/mocks"

import { RowTypes } from "."

describe("<RowTypes />", () => {
  describe("when 1 type were passed", () => {
    it("should render only 1 type icon", () => {
      const { getAllByTestId } = render(<RowTypes types={[{ type: typeMocks.electric }]} />)

      const typeIcon = getAllByTestId(/-icon/i)

      expect(typeIcon).toHaveLength(1)
      expect(typeIcon[0]).toBeOnTheScreen()
    })

    it("should render electric text when passing electric type", () => {
      const { getByText } = render(<RowTypes types={[{ type: typeMocks.electric }]} />)

      expect(getByText(/electric/i)).toBeOnTheScreen()
    })
  })

  describe("when 2 types were passed", () => {
    it("should render the 2 type icons", () => {
      const { getAllByTestId } = render(
        <RowTypes types={[{ type: typeMocks.fighting }, { type: typeMocks.poison }]} />
      )

      const typeIcon = getAllByTestId(/-icon/i)

      expect(typeIcon).toHaveLength(2)
      expect(typeIcon[0]).toBeOnTheScreen()
      expect(typeIcon[1]).toBeOnTheScreen()
    })

    it("should render the fighting and poison texts when passing the fighting and poison types", () => {
      const { getByText } = render(
        <RowTypes types={[{ type: typeMocks.fighting }, { type: typeMocks.poison }]} />
      )

      expect(getByText(/fighting/i)).toBeOnTheScreen()
      expect(getByText(/poison/i)).toBeOnTheScreen()
    })

    it("should render the ice and ground texts when passing the ice and ground types", () => {
      const { getByText } = render(
        <RowTypes types={[{ type: typeMocks.ice }, { type: typeMocks.ground }]} />
      )

      expect(getByText(/ice/i)).toBeOnTheScreen()
      expect(getByText(/ground/i)).toBeOnTheScreen()
    })
  })
})
