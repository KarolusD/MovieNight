import styled from 'styled-components/native'

const ContentContainer = styled.View<{ top?: number }>`
  flex: 1;
  height: 100%;
  top: ${({ top }) => (top ? `${top}px` : 0)};
  width: 100%;
`

export default ContentContainer
