import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import NativeModal from 'react-native-modal'
import styled, { ThemeContext } from 'styled-components'
import { CloseIcon } from '_assets/svgs/icons'
import { HeaderTitle } from '_components/Header'

const StyledModal = styled(NativeModal)`
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  margin: 0;
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

const Modal = ({ children, isVisible, isSwipeable, title, toggle }) => {
  const theme = useContext(ThemeContext)

  return (
    <StyledModal
      isVisible={isVisible}
      onSwipeComplete={isSwipeable ? () => toggle() : null}
      onSwipeThreshold={isSwipeable ? 20 : null}
      swipeDirection={isSwipeable ? 'down' : null}
      propagateSwipe={true}
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

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  isSwipeable: PropTypes.bool,
  title: PropTypes.string,
  toggle: PropTypes.func.isRequired,
}

export default Modal
