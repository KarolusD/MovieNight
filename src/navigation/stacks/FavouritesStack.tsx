import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { headerOptions } from '_components/Header'
import TopTabs from '_components/TopTabs/TopTabs'

import MyLikesScreen from '_screens/MyLikesScreen'
import RecommendedScreen from '_screens/RecommendedScreen'

type FavouritesTabStackParams = {
  MyLikes: undefined
  Recommended: undefined
}

const TabStack = createMaterialTopTabNavigator<FavouritesTabStackParams>()

const FavouritesTabStack: React.FC = () => {
  return (
    <TabStack.Navigator tabBar={(props) => <TopTabs {...props} />}>
      <TabStack.Screen
        name="MyLikes"
        component={MyLikesScreen}
        options={{ title: 'My likes' }}
      />
      <TabStack.Screen
        name="Recommended"
        component={RecommendedScreen}
        options={{ title: 'Recommended' }}
      />
    </TabStack.Navigator>
  )
}

type FavouritesStackParams = {
  TopTabs: undefined
  FilmDetails: { title?: string }
}

const Stack = createStackNavigator<FavouritesStackParams>()

const FavouritesStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={FavouritesTabStack}
        name="TopTabs"
        options={() => headerOptions({ title: 'Favourites' })}
      />
    </Stack.Navigator>
  )
}

export default FavouritesStack
