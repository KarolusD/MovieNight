import styled from 'styled-components'

const Container = styled.SafeAreaView`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  justify-content: center;
`

export default Container
