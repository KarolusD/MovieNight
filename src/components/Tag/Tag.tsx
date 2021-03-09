import React, { useContext } from 'react'
import { CaptionText } from '_components/Typography'
import styled, { ThemeContext } from 'styled-components/native'

const TagWrapper = styled.View<ITagWrapper>`
  align-items: center;
  background-color: ${({ background, theme }) =>
    background || theme.colors.pureBg};
  border-radius: 16px;
  height: 32px;
  justify-content: center;
  margin-bottom: ${({ theme }) => `${theme.spacing.xs}`};
  margin-right: ${({ theme }) => `${theme.spacing.xs}`};
  padding: ${({ theme }) => `0 ${theme.spacing.s}`};
`

interface ITagWrapper {
  background?: string
}

interface Props extends ITagWrapper {
  name: string
}

const Tag: React.FC<Props> = ({ background, name }) => {
  const theme = useContext(ThemeContext)
  return (
    <TagWrapper background={background}>
      <CaptionText color={theme.colors.gray}>{name}</CaptionText>
    </TagWrapper>
  )
}

export default Tag
