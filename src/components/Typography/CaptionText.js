import styled from 'styled-components'

const CaptionText = styled.Text`
  color: ${({ color, theme }) => (color ? color : theme.colors.text)};
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
`

export default CaptionText
