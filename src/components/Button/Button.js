import React from 'react'
import styled from 'styled-components'
import { ButtonText } from '_components/Typography'

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'transparent'};
  border-color: ${({ borderColor }) =>
    borderColor ? borderColor : 'transparent'};
  border-radius: 10px;
  height: ${({ type }) => (type === 'primary' ? '56px' : 'auto')};
  padding: ${({ type }) =>
    type === 'primary' || type === 'link' ? 0 : '10px 16px'};
  width: ${({ type }) => (type === 'primary' ? '100%' : 'auto')};
`

const Button = ({
  backgroundColor,
  borderColor,
  color,
  onPress,
  textAlign,
  title,
  type,
}) => {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      onPress={onPress}
      textAlign={textAlign}
      type={type}
    >
      <ButtonText color={color} primary={type === 'primary'}>
        {title}
      </ButtonText>
    </ButtonContainer>
  )
}

export default Button
