import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { headerOptions } from '_components/Header'
import SettingsScreen from '_screens/SettingsScreen'

type SettingsStackParams = {
  Settings: undefined
}

const Stack = createStackNavigator<SettingsStackParams>()

const SettingsStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={() => headerOptions({ title: 'Settings' })}
      />
    </Stack.Navigator>
  )
}

export default SettingsStack
