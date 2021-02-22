import styled from 'styled-components/native'
import { TextT } from './types'

const ParagraphText = styled.Text<TextT>`
  color: ${({ color, theme }) => color || theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.montserrat.semibold};
  font-size: ${({
    theme: {
      fonts: {
        sizes: { p1, p2 },
      },
    },
    primary,
  }) => (primary ? p1 : p2)};
`

export default ParagraphText
