import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components'

const ViewContainer = styled(SafeAreaView)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  height: auto;
  justify-content: center;
  width: 100%;
`

export default ViewContainer
