import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat'
import { Prompt_600SemiBold } from '@expo-google-fonts/prompt'
import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'
import BottomNavigation from '_navigation/BottomNavigation/BottomNavigation'
import { lightTheme, darkTheme } from '_themes'

const App = () => {
  // TODO: Create custom hook (useTheme) with useContext, useState, useEffect
  const [isDark, setIsDark] = useState(true)

  const [fontsLoaded] = useFonts({
    Prompt_600SemiBold,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <BottomNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
