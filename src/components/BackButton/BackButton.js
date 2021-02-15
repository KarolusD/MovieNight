import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import { ArrowLeftIcon } from '_assets/svgs/icons'

const StyledButton = styled.TouchableOpacity`
  height: 32px;
  width: 32px;
  padding: 4px;
  margin-left: 16px;
`

const BackButton = ({ route, goBack }) => {
  const theme = useContext(ThemeContext)
  return (
    <StyledButton onPress={goBack}>
      <ArrowLeftIcon color={theme.colors.text} />
    </StyledButton>
  )
}

BackButton.propTypes = {
  goBack: PropTypes.func.isRequired,
}

export default BackButton
