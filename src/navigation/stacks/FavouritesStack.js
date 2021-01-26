import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { headerOptions } from '_components/Header'
import FavouritesScreen from '_screens/FavouritesScreen/FavouritesScreen'

const Stack = createStackNavigator()

const FavouritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={() =>
          headerOptions({
            title: 'Favourites',
          })
        }
      />
    </Stack.Navigator>
  )
}

export default FavouritesStack
