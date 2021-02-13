import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { ButtonText } from '_components/Typography'
import { BlurView } from 'expo-blur'

const StyledBlur = styled(BlurView)`
  /* position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 36px; */

  border-radius: 30px;
  overflow: hidden;
  background: transparent;
`

const TabContainer = styled.TouchableOpacity`
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.transparentInfo : theme.colors.pureBg};
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.xs};
  padding: ${({
    theme: {
      spacing: { s },
    },
  }) => `0 ${s}`};
  height: 36px;
  overflow: hidden;
`

const Tab = ({ isActive, item, onPress }) => {
  const theme = useContext(ThemeContext)

  return (
    <TabContainer isActive={isActive} onPress={onPress}>
      <StyledBlur
        intensity={isActive ? 100 : 0}
        tint={theme.mode === 'dark' ? 'dark' : 'default'}
      />
      <ButtonText color={isActive ? theme.colors.info : theme.colors.gray}>
        {item.title}
      </ButtonText>
    </TabContainer>
  )
}

export default Tab
