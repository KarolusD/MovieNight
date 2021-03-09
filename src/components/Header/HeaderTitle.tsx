import React from 'react'
import { HeaderText } from '_components/Typography'
import styled from 'styled-components/native'

interface Props {
  title?: string
}

const HeaderTextWrapper = styled.View`
  background-color: red;
`

const HeaderTitle: React.FC<Props> = ({ title }) => {
  return (
    // <HeaderTextWrapper>
    <HeaderText textAlign="center" type="h4">
      {title}
    </HeaderText>
    // </HeaderTextWrapper>
  )
}

export default HeaderTitle
