import React from 'react'
import { TwoUsers } from '_assets/icons'
import { MainNavigationProps } from '_navigation/MainNavigation/types'
import ScreenTemplate from '_templates/ScreenTemplate'

const ConnectScreen: React.FC<MainNavigationProps<'BottomNavigation'>> = () => {
  return (
    <ScreenTemplate>
      <TwoUsers color="blue" filled />
    </ScreenTemplate>
  )
}

export default ConnectScreen
