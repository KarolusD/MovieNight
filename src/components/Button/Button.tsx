import React from 'react'
import styled from 'styled-components/native'
import { ButtonText } from '_components/Typography'

const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
  border-color: ${({ borderColor }) => borderColor || 'transparent'};
  border-radius: 10px;
  height: ${({ type }) => (type === 'primary' ? '56px' : 'auto')};
  padding: ${({ type }) =>
    type === 'primary' || type === 'link' ? 0 : '10px 16px'};
  width: ${({ type }) => (type === 'primary' ? '100%' : 'auto')};
`

type ButtonContainerProps = {
  backgroundColor?: string
  borderColor?: string
  onPress: () => void
  type: string
}

type ButtonTextProps = {
  color?: string
  primary?: boolean
  textAlign?: string
  title: string
}

type Props = ButtonContainerProps & ButtonTextProps

const Button: React.FC<Props> = ({
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
      type={type}
    >
      <ButtonText
        color={color}
        primary={type === 'primary'}
        textAlign={textAlign}
      >
        {title}
      </ButtonText>
    </ButtonContainer>
  )
}

export default Button
