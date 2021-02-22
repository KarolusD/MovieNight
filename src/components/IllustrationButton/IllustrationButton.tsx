import React from 'react'
import { ImageSourcePropType } from 'react-native'
import styled from 'styled-components/native'
import Image from '_components/Image/Image'
import { ButtonText } from '_components/Typography'

const StyledImageView = styled.View`
  bottom: -1px;
  margin-left: -16px;
  left: 0;
  position: absolute;
`

const StyledTextView = styled.View`
  height: 40px;
  width: 100px;
`

const IllustrationButtonContainer = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  border: ${({ borderColor }) => `1px solid ${borderColor}`};
  border-bottom-left-radius: ${({ variant }) =>
    variant === 'right' ? '16px' : 0};
  border-bottom-right-radius: ${({ variant }) =>
    variant === 'left' ? '16px' : 0};
  background-color: ${({ theme }) => theme.colors.pureBg};
  border-radius: 12px;
  flex-direction: ${({ variant }) =>
    variant === 'left' ? 'row' : 'row-reverse'};
  height: 80px;
  justify-content: flex-end;
  padding: ${({
    theme: {
      spacing: { m },
    },
  }) => m};
  width: 48%;
`

type ContainerProps = {
  borderColor: string
  variant: 'left' | 'right'
}

type OtherProps = {
  illustrationWidth: number
  illustrationHeight: number
  onPress: () => void
  source: ImageSourcePropType
  title: string
}

type Props = ContainerProps & OtherProps

const IllustrationButton: React.FC<Props> = ({
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
      <StyledImageView>
        <Image
          source={source}
          height={illustrationHeight}
          width={illustrationWidth}
        />
      </StyledImageView>
      <StyledTextView>
        <ButtonText textAlign={variant === 'left' ? 'right' : 'left'}>
          {title}
        </ButtonText>
      </StyledTextView>
    </IllustrationButtonContainer>
  )
}

export default IllustrationButton
