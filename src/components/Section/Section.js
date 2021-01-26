import React from 'react'
import styled from 'styled-components'
import { HeaderText } from '_components/Typography'

const SectionContainer = styled.View`
  margin-bottom: 20px;
`
const SectionHeader = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `0 ${theme.spacing.m}`};
  width: 100%;
`

const Section = ({ children, title, options }) => {
  const { displayButton } = options
  return (
    <SectionContainer>
      <SectionHeader>
        <HeaderText primary>{title}</HeaderText>
        {displayButton()}
      </SectionHeader>
      {children}
    </SectionContainer>
  )
}

export default Section
