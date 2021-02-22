import React from 'react'
import { PlayIcon } from '_assets/icons'
import { MainNavigationProps } from '_navigation/MainNavigation/types'
import ScreenTemplate from '_templates/ScreenTemplate'

const MoviesScreen: React.FC<MainNavigationProps<'Movies'>> = () => {
  return (
    <ScreenTemplate>
      <PlayIcon color="blue" filled />
    </ScreenTemplate>
  )
}

export default MoviesScreen
