import React from 'react'
import styled from 'styled-components/native'
import { ButtonText, CaptionText } from '_components/Typography'

const IconCardWrapper = styled.View`
  align-items: flex-start;
  border: ${({ theme }) => `1px solid ${theme.colors.almostBg}`};
  border-radius: 12px;
  margin-right: ${({ theme }) => theme.spacing.m};
  width: 128px;
  height: 108px;
  padding: ${({ theme }) => theme.spacing.s};
`

const IconWrapper = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.s};
`

const StyledCaptionText = styled(CaptionText)`
  margin-bottom: ${({ theme }) => theme.spacing.xxs};
`

interface Props {
  icon: React.ReactElement
  title: string
  stats: string
}

const IconCard: React.FC<Props> = ({ icon, title, stats }) => {
  return (
    <IconCardWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <StyledCaptionText>{title}</StyledCaptionText>
      <ButtonText primary>{stats}</ButtonText>
    </IconCardWrapper>
  )
}

export default IconCard
