import React from 'react'
import { PlayIcon } from '_assets/icons'
import { BottomNavigationProps } from '_navigation/BottomNavigation/types'
import ScreenTemplate from '_templates/ScreenTemplate'

const MoviesScreen: React.FC<BottomNavigationProps<'Movies'>> = () => {
  return (
    <ScreenTemplate>
      <PlayIcon color="blue" filled />
    </ScreenTemplate>
  )
}

export default MoviesScreen
