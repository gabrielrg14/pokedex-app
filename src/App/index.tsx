import { StatusBar } from "expo-status-bar"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator } from "@react-navigation/drawer"

import { ParamList } from "../@types"
import { About, Pokedex, Pokemon } from "../screens"

import Header from "../components/Header"
import Footer from "../components/Footer"

const Stack = createStackNavigator<ParamList>()
const Drawer = createDrawerNavigator<ParamList>()

const App = () => {
  const DrawerNavigator = () => (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: "#FFF",
        drawerActiveBackgroundColor: "#212121",
        headerTintColor: "#FFF",
        headerStyle: { backgroundColor: "#212121" },
        headerTitleAlign: "center",
        headerTitle: () => <Header />,
      }}
    >
      <Drawer.Screen name="Pokedex" component={Pokedex} options={{ title: "Pokédex" }} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  )

  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#212121" />
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#FFF",
          headerStyle: { backgroundColor: "#212121" },
          headerTitleAlign: "center",
          headerTitle: () => <Header />,
        }}
      >
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Pokemon" component={Pokemon} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  )
}

export default App
