import React from 'react'
import styled from 'styled-components'
import Image from '_components/Image/Image'
import { ButtonText } from '_components/Typography'

const StyledImageView = styled.View`
  position: absolute;
  left: 0;
  bottom: -1px;
  margin-left: -22px;
`

const StyledTextView = styled.View`
  height: 40px;
  width: 100px;
`

const IllustrationButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.pureBg};
  border-radius: 16px;
  border-bottom-left-radius: ${({ variant }) =>
    variant === 'right' ? '16px' : 0};
  border-bottom-right-radius: ${({ variant }) =>
    variant === 'left' ? '16px' : 0};
  border: ${({ borderColor }) => `1px solid ${borderColor}`};
  height: 80px;
  width: 48%;
  flex-direction: ${({ variant }) =>
    variant === 'left' ? 'row' : 'row-reverse'};
  justify-content: flex-end;
  align-items: center;

  padding: ${({
    theme: {
      spacing: { m },
    },
  }) => m};
`

const IllustrationButton = ({
  borderColor,
  illustrationWidth,
  illustrationHeight,
  onPress,
  source,
  title,
  variant,
}) => {
  return (
    <IllustrationButtonContainer
      borderColor={borderColor}
      onPress={onPress}
      variant={variant}
    >
      <StyledImageView variant={variant}>
        <Image
          source={source}
          height={illustrationHeight}
          width={illustrationWidth}
        />
      </StyledImageView>
      <StyledTextView variant={variant}>
        <ButtonText textAlign={variant === 'left' ? 'right' : 'left'}>
          {title}
        </ButtonText>
      </StyledTextView>
    </IllustrationButtonContainer>
  )
}

export default IllustrationButton
