import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { headerOptions } from '_components/Header'
import ConnectScreen from '_screens/ConnectScreen/ConnectScreen'

const Stack = createStackNavigator()

const ConnectStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Connect"
        component={ConnectScreen}
        options={() =>
          headerOptions({
            title: 'Connect',
          })
        }
      />
    </Stack.Navigator>
  )
}

export default ConnectStack
