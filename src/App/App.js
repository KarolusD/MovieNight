import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat'
import { Prompt_600SemiBold } from '@expo-google-fonts/prompt'
import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import MainRoutes from '_routes/MainRoutes'
import { lightTheme } from '_themes/themes'

const App = () => {
  const [theme, setTheme] = useState(lightTheme)
  let [fontsLoaded] = useFonts({
    Prompt_600SemiBold,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <MainRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
