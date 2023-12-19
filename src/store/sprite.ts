import { create } from "zustand"
import AsyncStorage from "@react-native-async-storage/async-storage"

export type Sprite = "front_default" | "front_shiny"

export const STORAGE_KEY = "pokemon_sprite"

type SpriteStore = {
  sprite: Sprite
  setSprite: (sprite: Sprite) => void
  toggleSprite: () => void
}

export const useStore = create<SpriteStore>()((set) => ({
  sprite: "front_default",
  setSprite: (sprite: Sprite) => set(() => ({ sprite })),
  toggleSprite: () => {
    const setAsyncStorage = async (sprite: Sprite) =>
      await AsyncStorage.setItem(STORAGE_KEY, sprite)
    set((state) => {
      const sprite = state.sprite === "front_default" ? "front_shiny" : "front_default"
      setAsyncStorage(sprite)
      return { sprite }
    })
  },
}))
