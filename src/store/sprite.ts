import { create } from "zustand"

type Sprite = "front_default" | "front_shiny"

type SpriteStore = {
  sprite: Sprite
  toggleSprite: () => void
}

export const useStore = create<SpriteStore>()((set) => ({
  sprite: "front_default",
  toggleSprite: () =>
    set((state) => ({
      sprite: state.sprite === "front_default" ? "front_shiny" : "front_default",
    })),
}))
