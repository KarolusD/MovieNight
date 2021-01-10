import React from 'react'
import styled from 'styled-components'
import BottomMenuTabIcon from './BottomMenuTabIcon/BottomMenuTabIcon'

const Tab = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.transparentInfo : 'transparent'};
  border-radius: 12px;
  height: 40px;
  justify-content: center;
  width: 40px;
`

const BottomMenuTab = ({ isFocused, navigation, options, route }) => {
  const onPress = (route, isFocused) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    })

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name)
    }
  }

  const onLongPress = (route) => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    })
  }

  return (
    <Tab
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      isFocused={isFocused}
      testID={options.tabBarTestID}
      onPress={() => onPress(route, isFocused)}
      onLongPress={() => onLongPress(route)}
    >
      <BottomMenuTabIcon name={route.name} isFocused={isFocused} />
    </Tab>
  )
}

export default BottomMenuTab
