import { BlurView } from 'expo-blur'
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components/native'
import { ButtonText } from '_components/Typography'
import { ItemT } from '../types'

const StyledBlur = styled(BlurView)`
  background: transparent;
  border-radius: 30px;
  overflow: hidden;
`

const TabContainer = styled.TouchableOpacity<{ isActive: boolean }>`
  align-items: center;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.transparentInfo : theme.colors.pureBg};
  border-radius: 18px;
  display: flex;
  height: 36px;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.xs};
  overflow: hidden;
  padding: ${({
    theme: {
      spacing: { s },
    },
  }) => `0 ${s}`};
`

type Props = {
  isActive: boolean
  item: ItemT
  onPress: () => void
}

const Tab: React.FC<Props> = ({ isActive, item, onPress }) => {
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
