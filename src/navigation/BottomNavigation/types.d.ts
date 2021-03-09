import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type BottomNavigationParams = {
  Connect: undefined
  Favourites: {
    screen: 'TopTabs'
    params: {
      [key: string]: string
    }
  }
  Home: undefined
  Movies: undefined
  Settings: undefined
}

export type BottomNavigationProps<T extends keyof BottomNavigationParams> = {
  navigation: StackNavigationProp<BottomNavigationParams, T>
  route: RouteProp<BottomNavigationParams, T>
}
