import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { headerOptions } from '_components/Header'
import ConnectScreen from '_screens/ConnectScreen'

type ConnectStackParams = {
  Connect: undefined
}

const Stack = createStackNavigator<ConnectStackParams>()

const ConnectStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Connect"
        component={ConnectScreen}
        options={() => headerOptions({ title: 'Connect' })}
      />
    </Stack.Navigator>
  )
}

export default ConnectStack
