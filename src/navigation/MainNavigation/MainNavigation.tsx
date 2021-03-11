import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import BackButton from '_components/BackButton/BackButton'
import { headerOptions } from '_components/Header'
import BottomNavigation from '_navigation/BottomNavigation/BottomNavigation'
import FilmDetailsScreen from '_screens/FilmDetailsScreen'
import { MainNavigationParams } from './types'

const Stack = createStackNavigator<MainNavigationParams>()

const MainNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen
        component={FilmDetailsScreen}
        name="FilmDetails"
        options={({ navigation, route }) =>
          headerOptions({
            headerShown: true,
            headerBackground: null,
            title: route?.params?.title,
            headerLeft: () => (
              <BackButton
                type="background"
                goBack={() => navigation.goBack()}
              />
            ),
          })
        }
      />
    </Stack.Navigator>
  )
}

export default MainNavigation
