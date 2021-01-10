import styled from 'styled-components'

const CaptionText = styled.Text`
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
  line-height: ${({
    theme: {
      fonts: {
        sizes: { c1, c2 },
      },
    },
    primary,
  }) => (primary ? c1 * 1.5 : c2 * 1.5)};
`

const BodyText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserrat.semibold};
  font-size: ${({
    theme: {
      fonts: {
        sizes: { b1, b2 },
      },
    },
    primary,
  }) => (primary ? b1 : b2)};
  line-height: ${({
    theme: {
      fonts: {
        sizes: { b1, b2 },
      },
    },
    primary,
  }) => (primary ? b1 * 1.5 : b2 * 1.5)};
`

const HeaderText = styled.Text`
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

export { CaptionText, BodyText, HeaderText }
