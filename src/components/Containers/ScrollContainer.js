import styled from 'styled-components'

const ScrollContainer = styled.ScrollView`
  width: 100%;
  height: 100%;
  flex: 1;
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : '116px')};
`

export default ScrollContainer
