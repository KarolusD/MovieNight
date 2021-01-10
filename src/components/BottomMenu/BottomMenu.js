import React from 'react'
import styled from 'styled-components'
import BottomMenuTab from './BottomMenuTab/BottomMenuTab'

const BottomContainer = styled.View`
  align-items: flex-start;
  margin-top: 16px;
  background-color: ${({ theme }) => theme.colors.transparentBg};
  flex-direction: row;
  height: 80px;
  justify-content: space-around;
  width: 100%;
`

const BottomMenu = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  return (
    <BottomContainer>
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
  )
}

export default BottomMenu
