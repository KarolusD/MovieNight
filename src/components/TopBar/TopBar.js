import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import { HeaderText } from '_components/Typography/Typography'

const TopContainer = styled.View`
  align-items: center;
  height: 88px;
  justify-content: flex-end;
  width: 100%;
  position: absolute;
  top: 0;
`

const TopBar = ({ title }) => {
  return (
    <TopContainer>
      <HeaderText>{title && title}</HeaderText>
    </TopContainer>
  )
}

export default TopBar
