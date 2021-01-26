import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { ButtonText } from '_components/Typography'

const TabContainer = styled.TouchableOpacity`
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.transparentInfo : theme.colors.pureBg};
  border-radius: 18px;
  margin-right: ${({ theme }) => theme.spacing.xs};
  padding: ${({
    theme: {
      spacing: { xs, s },
    },
  }) => `${xs} ${s}`};
`

const Tab = ({ isActive, item, onPress }) => {
  const {
    colors: { info, gray },
  } = useContext(ThemeContext)

  return (
    <TabContainer isActive={isActive} onPress={onPress}>
      <ButtonText color={isActive ? info : gray}>{item.title}</ButtonText>
    </TabContainer>
  )
}

export default Tab
