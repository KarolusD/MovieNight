import styled from 'styled-components/native'
import { IText } from './types'

const CaptionText = styled.Text<IText>`
  color: ${({ color, theme }) => color || theme.colors.text};
  font-family: ${({
    theme: {
      fonts: {
        montserrat: { regular, semibold },
      },
    },
    primary,
  }) => (primary ? regular : semibold)};
  font-size: ${({
    theme: {
      fonts: {
        sizes: { c1, c2 },
      },
    },
    primary,
  }) => (primary ? c1 : c2)};
  text-align: ${({ textAlign }) => textAlign || 'left'};
`

export default CaptionText
