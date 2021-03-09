import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components/native'

import { ArrowLeftIcon } from '_assets/icons'

const StyledButton = styled.TouchableOpacity<{ type?: 'background' }>`
  background: ${({ theme, type }) =>
    type === 'background' ? theme.colors.transparentPureBg : 'transparent'};
  border-radius: 22px;
  margin-left: 16px;

  padding: 10px;
`

interface Props {
  goBack: () => void
  type?: 'background'
}

const BackButton: React.FC<Props> = ({ goBack, type }) => {
  const theme = useContext(ThemeContext)

  return (
    <StyledButton onPress={goBack} type={type}>
      <ArrowLeftIcon color={theme.colors.text} />
    </StyledButton>
  )
}

export default BackButton
