import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type MainNavigationParams = {
  Connect: undefined
  Favourites: {
    screen: 'TopTabs' | 'FilmDetails'
    params: {
      [key: string]: any
    }
  }
  Home: undefined
  Movies: undefined
  Settings: undefined
  FilmDetails: undefined
}

export type MainNavigationProps<T extends keyof MainNavigationParams> = {
  navigation: StackNavigationProp<MainNavigationParams, T>
  route: RouteProp<MainNavigationParams, T>
}
