import styled from 'styled-components'

const ParagraphText = styled.Text`
  color: ${({ color, theme }) => (color ? color : theme.colors.text)};
  font-family: ${({ theme }) => theme.fonts.montserrat.semibold};
  font-size: ${({
    theme: {
      fonts: {
        sizes: { p1, p2 },
      },
    },
    primary,
  }) => (primary ? p1 : p2)};
  line-height: ${({
    theme: {
      fonts: {
        sizes: { p1, p2 },
      },
    },
    primary,
  }) => (primary ? p1 * 1.5 : p2 * 1.5)};
`

export default ParagraphText
