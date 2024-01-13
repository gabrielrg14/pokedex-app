import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from "@react-navigation/stack"
import { createDrawerNavigator, DrawerNavigationOptions } from "@react-navigation/drawer"

import { ParamList } from "../@types"
import { Header, HeaderRight } from "../components"
import { About, Pokedex, Pokemon } from "../screens"

const Stack = createStackNavigator<ParamList>()
const Drawer = createDrawerNavigator<ParamList>()

const Routes = () => {
  const headerOptions: StackNavigationOptions & DrawerNavigationOptions = {
    headerTintColor: "#FFF",
    headerStyle: {
      backgroundColor: "#212121",
      height: 100,
    },
    headerTitleContainerStyle: { paddingLeft: 15 },
    headerTitleAlign: "center",
    headerRightContainerStyle: { paddingRight: 15 },
    headerTitle: () => <Header />,
    headerRight: () => <HeaderRight />,
  }

  const DrawerNavigator = () => (
    <Drawer.Navigator
      screenOptions={{
        ...headerOptions,
        drawerActiveTintColor: "#FFF",
        drawerActiveBackgroundColor: "#212121",
      }}
    >
      <Drawer.Screen name="Pokedex" component={Pokedex} options={{ title: "Pokédex" }} />
      <Drawer.Screen name="About" component={About} options={{ headerRight: () => null }} />
    </Drawer.Navigator>
  )

  return (
    <Stack.Navigator
      screenOptions={{
        ...headerOptions,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  )
}

export default Routes
