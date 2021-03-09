import styled from 'styled-components/native'
import { IText } from './types'

const ParagraphText = styled.Text<IText>`
  color: ${({ color, theme }) => color || theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.montserrat.regular};
  font-size: ${({
    theme: {
      fonts: {
        sizes: { p1, p2 },
      },
    },
    primary,
  }) => (primary ? p1 : p2)};
  line-height: ${({ primary }) => (primary ? '28px' : '22px')};
`

export default ParagraphText
