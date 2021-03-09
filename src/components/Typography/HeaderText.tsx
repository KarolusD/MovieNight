import styled from 'styled-components/native'
import { IText, IType } from './types'

const HeaderText = styled.Text<IText & IType>`
  color: ${({ color, theme }) => color || theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.prompt.semibold};
  font-size: ${({ theme, type, primary }) => {
    if (type) return theme.fonts.sizes[`${type}`]
    if (primary) return theme.fonts.sizes.h1
    return theme.fonts.sizes.h2
  }};
  letter-spacing: 0.3px;
  text-align: ${({ textAlign }) => textAlign || 'left'};
`

export default HeaderText
