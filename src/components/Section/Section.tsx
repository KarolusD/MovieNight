import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components/native'
import { HeaderText } from '_components/Typography'

const SectionContainer = styled.View`
  margin-bottom: 24px;
`
const SectionHeader = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `0 ${theme.spacing.m}`};
  width: 100%;
`

interface Props {
  children: React.ReactNode
  displayButton?: () => React.ReactElement
  title: string
}

const Section: React.FC<Props> = ({ children, displayButton, title }) => {
  const theme = useContext(ThemeContext)
  return (
    <SectionContainer>
      <SectionHeader>
        <HeaderText type="h3">{title}</HeaderText>
        {displayButton && displayButton()}
      </SectionHeader>
      {children}
    </SectionContainer>
  )
}

export default Section
