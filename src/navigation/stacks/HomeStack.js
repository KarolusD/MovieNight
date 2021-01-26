import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { headerOptions } from '_components/Header'
import HomeScreen from '_screens/HomeScreen/HomeScreen'

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={() =>
          headerOptions({
            title: 'Home',
          })
        }
      />
    </Stack.Navigator>
  )
}

export default HomeStack
