import React, { useContext } from 'react'
import NativeModal from 'react-native-modal'
import styled, { ThemeContext } from 'styled-components/native'
import { CloseIcon } from '_assets/icons'
import { HeaderTitle } from '_components/Header'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledModal = styled(NativeModal as any)<ModalT>`
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  margin: ${({ margin }) =>
    `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px` ||
    0};
  margin-top: 56px;
  overflow: hidden;
`

const HeaderTitleWrapper = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 64px;
  align-items: center;
  justify-content: center;
`

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 32px;
  height: 32px;
  padding: ${({ theme }) => theme.spacing.xxs};
`

type ModalT = {
  margin: {
    top?: number
    left?: number
    right?: number
    bottom?: number
  }
}

type Props = {
  children: React.ReactNode
  isVisible: boolean
  isSwipeable?: boolean
  title?: string | null
  toggle: () => void
}

const Modal: React.FC<Props & ModalT> = ({
  children,
  isVisible,
  isSwipeable,
  margin,
  title,
  toggle,
}) => {
  const theme = useContext(ThemeContext)

  return (
    <StyledModal
      isVisible={isVisible}
      margin={margin}
      onSwipeComplete={isSwipeable ? () => toggle() : null}
      onSwipeThreshold={isSwipeable ? 20 : null}
      swipeDirection={isSwipeable ? 'down' : null}
      propagateSwipe
    >
      {children}
      {title && (
        <HeaderTitleWrapper>
          <HeaderTitle title={title} />
        </HeaderTitleWrapper>
      )}
      <CloseButton onPress={() => toggle()}>
        <CloseIcon color={theme.colors.text} />
      </CloseButton>
    </StyledModal>
  )
}

export default Modal
