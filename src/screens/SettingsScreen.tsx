import React from 'react'
import { SettingsIcon } from '_assets/icons'
import { MainNavigationProps } from '_navigation/MainNavigation/types'
import ScreenTemplate from '_templates/ScreenTemplate'

const SettingsScreen: React.FC<MainNavigationProps<'Settings'>> = () => {
  return (
    <ScreenTemplate>
      <SettingsIcon color="blue" filled />
    </ScreenTemplate>
  )
}

export default SettingsScreen
