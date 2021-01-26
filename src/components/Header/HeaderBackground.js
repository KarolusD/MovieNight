import React, { useContext } from 'react'
import { BlurView } from 'expo-blur'
import styled, { ThemeContext } from 'styled-components'

const HeaderContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 96px;
  background-color: ${({ theme }) => theme.colors.transparentPureBg};
`
const HeaderBlur = styled(BlurView)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 96px;
`

const HeaderBackground = ({children}) => {
  const theme = useContext(ThemeContext)
  return (
      <HeaderBlur
        intensity={100}
        tint={theme.mode === 'dark' ? 'dark' : 'default'}
      >
      <HeaderContainer>
        {children}
      </HeaderContainer>

      </HeaderBlur>
  )
}

export default HeaderBackground
