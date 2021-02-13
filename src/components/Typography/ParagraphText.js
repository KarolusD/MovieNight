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
`

export default ParagraphText
