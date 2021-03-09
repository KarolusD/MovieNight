import React, { useContext } from 'react'
import { BlurView } from 'expo-blur'
import styled, { ThemeContext } from 'styled-components/native'
import { Platform } from 'react-native'
import matchBackground from '_utils/matchBackground'

const HeaderContainer = styled.View<IHeader>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: ${({ height }) => `${height}px`};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`
const HeaderBlur = styled(BlurView)<IHeader>`
  height: ${({ height }) => `${height}px`};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`

interface IHeader {
  backgroundColor: () => string
  height: number
}

const HeaderBackground: React.FC = () => {
  const theme = useContext(ThemeContext)
  const height = Platform.OS === 'ios' ? 92 : 80

  return (
    <>
      {Platform.OS === 'ios' && (
        <HeaderBlur
          height={height}
          intensity={100}
          tint={theme.mode === 'dark' ? 'dark' : 'default'}
        />
      )}
      <HeaderContainer
        backgroundColor={() => matchBackground(Platform.OS, theme)}
        height={height}
      />
    </>
  )
}

export default HeaderBackground
