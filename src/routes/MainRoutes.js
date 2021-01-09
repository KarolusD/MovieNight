import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import ConnectScreen from '_screens/ConnectScreen/ConnectScreen'
import FavouritesScreen from '_screens/FavouritesScreen/FavouritesScreen'
import HomeScreen from '_screens/HomeScreen/HomeScreen'
import MoviesScreen from '_screens/MoviesScreen/MoviesScreen'
import SettingsScreen from '_screens/SettingsScreen/SettingsScreen'
import BottomMenu from '_components/BottomMenu/BottomMenu'

const BottomTab = createBottomTabNavigator()

const MainRoutes = () => {
  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      tabBar={(props) => <BottomMenu {...props} />}
    >
      <BottomTab.Screen name='Home' component={HomeScreen} />
      <BottomTab.Screen name='Favourites' component={FavouritesScreen} />
      <BottomTab.Screen name='Movies' component={MoviesScreen} />
      <BottomTab.Screen name='Connect' component={ConnectScreen} />
      <BottomTab.Screen name='Settings' component={SettingsScreen} />
    </BottomTab.Navigator>
  )
}

export default MainRoutes
