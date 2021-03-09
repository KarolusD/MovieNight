import styled from 'styled-components/native'
import { IText } from './types'

const ButtonText = styled.Text<IText>`
  color: ${({ color, theme }) => color || theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.prompt.semibold};
  font-size: ${({
    theme: {
      fonts: {
        sizes: { b1, b2 },
      },
    },
    primary,
  }) => (primary ? b1 : b2)};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  letter-spacing: 0.3px;
`

export default ButtonText
