import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { headerOptions } from '_components/Header'
import MoviesScreen from '_screens/MoviesScreen'

type MoviesStackParams = {
  Movies: undefined
}

const Stack = createStackNavigator<MoviesStackParams>()

const MoviesStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Movies"
        component={MoviesScreen}
        options={() => headerOptions({ title: 'Movies' })}
      />
    </Stack.Navigator>
  )
}

export default MoviesStack
