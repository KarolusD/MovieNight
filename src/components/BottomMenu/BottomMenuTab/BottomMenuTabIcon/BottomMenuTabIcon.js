import React, { useContext } from 'react'
import {
  TwoUsers,
  CategoryIcon,
  HeartIcon,
  PlayIcon,
  SettingsIcon,
} from '_assets/svgs/icons'
import { ThemeContext } from 'styled-components'

const BottomMenuTabIcon = ({ name, isFocused }) => {
  const theme = useContext(ThemeContext)
  let color = isFocused ? theme.colors.info : theme.colors.gray

  const BottomIcons = {
    Home: <CategoryIcon color={color} filled={isFocused} />,
    Favourites: <HeartIcon color={color} filled={isFocused} />,
    Movies: <PlayIcon color={color} filled={isFocused} />,
    Connect: <TwoUsers color={color} filled={isFocused} />,
    Settings: <SettingsIcon color={color} filled={isFocused} />,
  }

  return BottomIcons[name]
}

export default BottomMenuTabIcon
