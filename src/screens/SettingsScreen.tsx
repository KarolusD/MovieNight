import React from 'react'
import { SettingsIcon } from '_assets/icons'
import { BottomNavigationProps } from '_navigation/BottomNavigation/types'
import ScreenTemplate from '_templates/ScreenTemplate'

const SettingsScreen: React.FC<BottomNavigationProps<'Settings'>> = () => {
  return (
    <ScreenTemplate>
      <SettingsIcon color="blue" filled />
    </ScreenTemplate>
  )
}

export default SettingsScreen
