import React from 'react'
import { TwoUsers } from '_assets/icons'
import { MainNavigationProps } from '_navigation/BottomNavigation/types'
import ScreenTemplate from '_templates/ScreenTemplate'

const ConnectScreen: React.FC<MainNavigationProps<'Connect'>> = () => {
  return (
    <ScreenTemplate>
      <TwoUsers color="blue" filled />
    </ScreenTemplate>
  )
}

export default ConnectScreen
