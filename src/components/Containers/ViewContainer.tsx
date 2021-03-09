import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components'

const ViewContainer = styled(SafeAreaView)<{ background?: string }>`
  align-items: center;
  background-color: ${({ background, theme }) =>
    background || theme.colors.background};
  flex: 1;
  height: auto;
  justify-content: center;
  width: 100%;
`

export default ViewContainer
