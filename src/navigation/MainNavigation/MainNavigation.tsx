import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import BottomMenu from '_components/BottomMenu/BottomMenu'
import { headerOptions } from '_components/Header'
import {
  ConnectStack,
  FavouritesStack,
  HomeStack,
  MoviesStack,
  SettingsStack,
} from '../stacks'
import { MainNavigationParams } from './types'

const BottomTab = createBottomTabNavigator<MainNavigationParams>()

const MainNavigation: React.FC = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <BottomMenu {...props} />}
    >
      <BottomTab.Screen name="Home" component={HomeStack} />
      <BottomTab.Screen name="Favourites" component={FavouritesStack} />
      <BottomTab.Screen name="Movies" component={MoviesStack} />
      <BottomTab.Screen name="Connect" component={ConnectStack} />
      <BottomTab.Screen name="Settings" component={SettingsStack} />
    </BottomTab.Navigator>
  )
}

export default MainNavigation
