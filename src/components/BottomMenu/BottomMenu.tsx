import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { BlurView } from 'expo-blur'
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components/native'
import BottomMenuIcon from './BottomMenuIcon/BottomMenuIcon'

const BottomBlur = styled(BlurView)`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
`

const BottomContainer = styled.View`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.transparentPureBg};
  flex-direction: row;
  justify-content: space-between;
  height: 90px;
  padding: 16px 24px;
`

const Tab = styled.TouchableOpacity<{ isFocused: boolean }>`
  align-items: center;
  background-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.transparentInfo : 'transparent'};
  border-radius: 12px;
  height: 40px;
  justify-content: center;
  width: 40px;
`

const BottomMenu: React.FC<BottomTabBarProps> = ({
  state,
  navigation,
  descriptors,
}) => {
  const theme = useContext(ThemeContext)
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions?.tabBarVisible === false) {
    return null
  }

  return (
    <BottomBlur
      intensity={100}
      tint={theme.mode === 'dark' ? 'dark' : 'default'}
    >
      <BottomContainer>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route?.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route?.name)
            }
          }

          const onLongPress = () => {
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
              onPress={onPress}
              onLongPress={onLongPress}
              key={route.name}
            >
              <BottomMenuIcon name={route.name} isFocused={isFocused} />
            </Tab>
          )
        })}
      </BottomContainer>
    </BottomBlur>
  )
}

export default BottomMenu
