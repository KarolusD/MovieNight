import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { headerOptions } from '_components/Header'
import HomeScreen from '_screens/HomeScreen'

type HomeStackParams = {
  Home: undefined
  FilmDetails: {
    title?: string
    headerLeft: () => React.FC
    item: {
      [key: string]: string
    }
  }
}

const Stack = createStackNavigator<HomeStackParams>()

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        component={HomeScreen}
        name="Home"
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
