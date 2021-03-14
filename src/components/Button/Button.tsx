import React from 'react'
import styled from 'styled-components/native'
import { ButtonText } from '_components/Typography'

const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  align-items: center;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${borderColor}` : '1px solid transparent'};
  border-radius: 10px;
  justify-content: center;
  height: ${({ type }) => (type !== 'link' ? '56px' : 'auto')};
  padding: ${({ type }) =>
    type === 'primary' || type === 'link' ? '4px 0' : '10px 24px'};
  width: ${({ type }) => (type === 'primary' ? '100%' : 'auto')};
`

type ButtonContainerProps = {
  backgroundColor?: string
  borderColor?: string
  onPress: () => void
  type?: 'primary' | 'link'
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
