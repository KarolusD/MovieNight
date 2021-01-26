import { BlurView } from 'expo-blur'
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import BottomMenuTab from './BottomMenuTab/BottomMenuTab'

const BottomBlur = styled(BlurView)`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`

const BottomContainer = styled.View`
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.transparentPureBg};
  padding-top: ${({ theme }) => theme.spacing.m};
  height: 90px;
  width: 100%;
`

const BottomMenu = ({ state, descriptors, navigation, style }) => {
  const theme = useContext(ThemeContext)
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  return (
    <BottomBlur
      intensity={100}
      tint={theme.mode === 'dark' ? 'dark' : 'default'}
    >
      <BottomContainer style={style}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const isFocused = state.index === index

          return (
            <BottomMenuTab
              isFocused={isFocused}
              key={route.key}
              navigation={navigation}
              options={options}
              route={route}
            />
          )
        })}
      </BottomContainer>
    </BottomBlur>
  )
}

export default BottomMenu
