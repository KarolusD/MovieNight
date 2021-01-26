import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components'

const ViewContainer = styled(SafeAreaView)`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: auto;
  flex: 1;
`

export default ViewContainer
