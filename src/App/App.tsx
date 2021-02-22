/* eslint-disable camelcase */
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
import MainNavigation from '_navigation/MainNavigation/MainNavigation'
import { darkTheme, lightTheme } from '_themes/themes'

const App: React.FC = () => {
  // TODO: Create custom hook (useTheme) with useContext, useState, useEffect
  const [isDark, setIsDark] = useState<boolean>(true)

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
          <MainNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
