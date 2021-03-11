import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { BlurView } from 'expo-blur'
import React, { useContext } from 'react'
import { Platform } from 'react-native'
import styled, { ThemeContext } from 'styled-components/native'
import matchBackground from '_utils/matchBackground'
import BottomMenuIcon from './BottomMenuIcon/BottomMenuIcon'

const BottomBlur = styled(BlurView)<{ height: number }>`
  height: ${({ height }) => `${height}px`};
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
`

const BottomContainer = styled.View<IBottomContainer>`
  align-items: flex-start;
  background-color: ${({ background }) => background};
  flex-direction: row;
  justify-content: space-between;
  height: ${({ height }) => `${height}px`};
  padding: ${({ theme }) => `${theme.spacing.m} ${theme.spacing.xl}`};
  position: absolute;
  bottom: 0;
  width: 100%;
`

const Tab = styled.TouchableOpacity<{ isFocused: boolean }>`
  align-items: center;
  background-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.transparentInfo : 'transparent'};
  border-radius: 12px;
  border: ${({ theme, isFocused }) =>
    isFocused ? `1px solid ${theme.colors.info}` : '1px solid transparent'};
  height: 44px;
  justify-content: center;
  width: 44px;
`

interface IBottomContainer {
  background: () => string
  height: number
}

const BottomMenu: React.FC<BottomTabBarProps> = ({
  state,
  navigation,
  descriptors,
}) => {
  const theme = useContext(ThemeContext)
  const focusedOptions = descriptors[state.routes[state.index].key].options
  const height = Platform.OS === 'ios' ? 90 : 75

  if (focusedOptions?.tabBarVisible === false) {
    return null
  }

  return (
    <>
      <BottomBlur
        height={height}
        intensity={100}
        tint={theme.mode === 'dark' ? 'dark' : 'default'}
      />
      <BottomContainer
        background={() => matchBackground(Platform.OS, theme)}
        height={height}
      >
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
    </>
  )
}

export default BottomMenu
