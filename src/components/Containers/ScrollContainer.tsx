import styled from 'styled-components/native'

const ScrollContainer = styled.ScrollView<{ paddingTop?: number }>`
  flex: 1;
  height: 100%;
  padding-top: ${({ paddingTop }) => (paddingTop ? `${paddingTop}px` : 0)};
  width: 100%;
`

export default ScrollContainer
