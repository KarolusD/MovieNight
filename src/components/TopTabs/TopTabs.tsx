import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React, { useContext } from 'react'
import { Dimensions, Platform } from 'react-native'
import Animated from 'react-native-reanimated'
import styled, { ThemeContext } from 'styled-components/native'
import { ButtonText } from '_components/Typography'

const AnimatedButtonText = Animated.createAnimatedComponent(ButtonText)

const { width } = Dimensions.get('window')

const DoubleTab = styled.View<{ width: number; top: number }>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.pureBg};
  border-radius: 26px;
  flex-direction: row;
  height: 52px;
  justify-content: center;
  left: ${({ width }) => `${width / 2 - 135}px`};
  padding: 4px;
  position: absolute;
  top: ${({ top }) => `${top}px`};
  width: 270px;
  z-index: 100;
  overflow: hidden;
`

const TopTab = styled.TouchableOpacity`
  align-items: center;
  border-radius: 22px;
  display: flex;
  font-family: ${({ theme }) => theme.fonts.prompt.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.b2};
  height: 44px;
  justify-content: center;
  width: 131px;
`

const Indicator = styled.View`
  border-radius: 22px;
  background-color: ${({ theme }) => theme.colors.transparentInfo};
  height: 44px;
  left: 4px;
  position: absolute;
  top: 4px;
  width: 131px;
`

type Props = BottomTabBarProps & {
  position: Animated.Node<number>
}

const TopTabs: React.FC<Props> = ({
  state,
  descriptors,
  navigation,
  position,
}) => {
  const theme = useContext(ThemeContext)
  const inputRange = state.routes.map((_, i) => i)
  const top = Platform.OS === 'ios' ? 112 : 96

  const translateX = Animated.interpolate(position, {
    inputRange,
    outputRange: [0, 131],
  })

  return (
    <DoubleTab top={top} width={width}>
      <Indicator as={Animated.View} style={{ transform: [{ translateX }] }} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]

        let label = ''

        if (typeof options.tabBarLabel === 'string') label = options.tabBarLabel
        else if (options.title) label = options.title
        else label = route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        const color = Animated.interpolateColors(position, {
          inputRange,
          outputColorRange: inputRange.map((i) =>
            i === index ? theme.colors.info : theme.colors.gray
          ),
        })

        return (
          <TopTab
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.key}
          >
            <AnimatedButtonText style={{ color }}>{label}</AnimatedButtonText>
          </TopTab>
        )
      })}
    </DoubleTab>
  )
}

export default TopTabs
