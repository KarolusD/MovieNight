import styled from 'styled-components/native'
import { TextT } from './types'

const HeaderText = styled.Text<TextT>`
  color: ${({ color, theme }) => color || theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.prompt.semibold};
  font-size: ${({
    theme: {
      fonts: {
        sizes: { h1, h2 },
      },
    },
    primary,
  }) => (primary ? h1 : h2)};
  line-height: ${({ primary }) => (primary ? '30px' : '27px')};
  letter-spacing: 0.3px;
`

export default HeaderText
