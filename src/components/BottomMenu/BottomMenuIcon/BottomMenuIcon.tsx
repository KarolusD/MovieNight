import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import {
  CategoryIcon,
  HeartIcon,
  PlayIcon,
  SettingsIcon,
  TwoUsers,
} from '_assets/icons'

interface Props {
  name: string
  isFocused: boolean
}

const BottomMenuTabIcon: React.FC<Props> = ({ name, isFocused }) => {
  const theme = useContext(ThemeContext)
  const color = isFocused ? theme.colors.info : theme.colors.gray

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
