import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import BackButton from '_components/BackButton/BackButton'
import { headerOptions } from '_components/Header'
import FilmDetailsScreen from '_screens/FilmDetailsScreen'
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
        options={() => headerOptions({ title: 'Home' })}
      />
      <Stack.Screen
        component={FilmDetailsScreen}
        name="FilmDetails"
        options={({ navigation, route }) =>
          headerOptions({
            title: route?.params?.title || 'Film details',
            headerLeft: () => <BackButton goBack={() => navigation.goBack()} />,
          })
        }
      />
    </Stack.Navigator>
  )
}

export default HomeStack
