import styled from 'styled-components'

const ContentContainer = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : '116px')};
`

export default ContentContainer
