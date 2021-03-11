import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type MainNavigationParams = {
  BottomNavigation: undefined
  FilmDetails: {
    title?: string
    item: any
  }
}

export type MainNavigationProps<T extends keyof MainNavigationParams> = {
  navigation: StackNavigationProp<MainNavigationParams, T>
  route: RouteProp<MainNavigationParams, T>
}
