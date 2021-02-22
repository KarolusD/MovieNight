import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from './types'

const InfoIcon: React.FC<IconProps> = (props) => {
  const { color, filled } = props
  if (filled) {
    return (
      <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
        <Path
          opacity={0.4}
          d="M16.34 2H7.67C4.28 2 2 4.38 2 7.92v8.17C2 19.62 4.28 22 7.67 22h8.67c3.39 0 5.66-2.38 5.66-5.91V7.92C22 4.38 19.73 2 16.34 2z"
          fill={color}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.125 8.19a.878.878 0 001.755 0 .876.876 0 00-.875-.876.879.879 0 00-.88.875zm1.745 3.172a.877.877 0 00-.875-.875.877.877 0 00-.875.875v4.42c0 .482.393.875.875.875a.877.877 0 00.875-.875v-4.42z"
          fill={color}
        />
      </Svg>
    )
  }
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.75 8.204a.75.75 0 00-.75-.75l-.112.007a.75.75 0 00.102 1.493l.111-.007a.75.75 0 00.649-.743zm-.017 3.071a.75.75 0 00-1.493.102v4.42l.007.1a.75.75 0 001.493-.1v-4.42l-.007-.102z"
        fill={color}
      />
      <Path
        opacity={0.4}
        d="M16.334 2H7.665C4.268 2 2 4.433 2 7.916v8.168C2 19.571 4.262 22 7.665 22h8.669C19.738 22 22 19.57 22 16.084V7.916C22 4.43 19.738 2 16.334 2zM7.665 3.5h8.67c2.55 0 4.165 1.735 4.165 4.416v8.168c0 2.681-1.615 4.416-4.166 4.416H7.665c-2.55 0-4.165-1.735-4.165-4.416V7.916C3.5 5.24 5.12 3.5 7.665 3.5z"
        fill={color}
      />
    </Svg>
  )
}

export default InfoIcon
