import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components/native'

import { ArrowLeftIcon } from '_assets/icons'

const StyledButton = styled.TouchableOpacity`
  height: 32px;
  margin-left: 16px;
  padding: 4px;
  width: 32px;
`

type Props = {
  goBack: () => void
}

const BackButton: React.FC<Props> = ({ goBack }) => {
  const theme = useContext(ThemeContext)
  return (
    <StyledButton onPress={goBack}>
      <ArrowLeftIcon color={theme.colors.text} />
    </StyledButton>
  )
}

export default BackButton
