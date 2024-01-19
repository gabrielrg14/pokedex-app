import { useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"

import { Sprite, useStore } from "../store"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { STORAGE_KEY } from "../common"

import Routes from "../routes"
import { Footer } from "../components"

const App = () => {
  const { setSprite } = useStore()

  useEffect(() => {
    const setSpriteStorage = async () => {
      const spriteStorage = await AsyncStorage.getItem(STORAGE_KEY)
      if (spriteStorage) setSprite(spriteStorage as Sprite)
    }
    setSpriteStorage()
  }, [setSprite])

  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#212121" />
      <Routes />
      <Footer />
    </NavigationContainer>
  )
}

export default App
