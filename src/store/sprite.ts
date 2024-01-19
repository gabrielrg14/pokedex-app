import { create } from "zustand"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { STORAGE_KEY } from "../common"

export type Sprite = "front_default" | "front_shiny"

type SpriteStore = {
  sprite: Sprite
  setSprite: (sprite: Sprite) => void
  toggleSprite: () => void
}

const setAsyncStorage = async (sprite: Sprite) =>
  await AsyncStorage.setItem(STORAGE_KEY, sprite)

export const useStore = create<SpriteStore>()((set) => ({
  sprite: "front_default",
  setSprite: (sprite: Sprite) => set(() => ({ sprite })),
  toggleSprite: () => {
    set((state) => {
      const sprite = state.sprite === "front_default" ? "front_shiny" : "front_default"
      setAsyncStorage(sprite)
      return { sprite }
    })
  },
}))
