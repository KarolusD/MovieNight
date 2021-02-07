import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import {
  ContentContainer,
  ScrollContainer,
  ViewContainer,
} from '_components/Containers'

const ScreenTemplate = ({ children, paddingTop, container }) => {
  const theme = useContext(ThemeContext)

  const renderContainer = () => {
    if (container === 'scroll') {
      return (
        <ScrollContainer paddingTop={paddingTop}>{children}</ScrollContainer>
      )
    } else if (container === 'static') {
      return (
        <ContentContainer paddingTop={paddingTop}>{children}</ContentContainer>
      )
    } else {
      return children
    }
  }
  return (
    <ViewContainer edges={['right', 'bottom', 'left']}>
      <StatusBar
        style={theme.mode === 'light' ? 'dark' : 'light'}
        translucent
      />
      {renderContainer()}
    </ViewContainer>
  )
}

ScreenTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  paddingTop: PropTypes.string,
  container: PropTypes.oneOf(['scroll', 'static', undefined]),
}

export default ScreenTemplate
