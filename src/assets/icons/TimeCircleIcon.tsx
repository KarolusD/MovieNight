import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from './types'

const TimeCircleIcon: React.FC<IconProps> = (props) => {
  const { color, filled } = props

  if (filled) {
    return (
      <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
        <Path
          opacity={0.4}
          d="M22 12c0 5.524-4.477 10-10 10S2 17.524 2 12C2 6.478 6.477 2 12 2s10 4.478 10 10z"
          fill={color}
        />
        <Path
          d="M15.573 15.814a.756.756 0 01-.384-.105l-3.926-2.342a.754.754 0 01-.365-.645V7.675a.75.75 0 011.5 0v4.621l3.56 2.123a.752.752 0 01-.385 1.395z"
          fill={color}
        />
      </Svg>
    )
  }
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 2C6.477 2 2 6.477 2 12c0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.523-4.477-10-10-10zm0 1.5a8.5 8.5 0 018.5 8.5 8.5 8.5 0 01-8.5 8.5A8.5 8.5 0 013.5 12 8.5 8.5 0 0112 3.5z"
        fill={color}
      />
      <Path
        opacity={0.4}
        d="M11.662 7.097a.75.75 0 01.743.648l.007.102v4.42l3.404 2.032a.75.75 0 01.306.937l-.046.091a.75.75 0 01-.938.306l-.09-.046-3.77-2.249a.75.75 0 01-.358-.532l-.008-.112V7.847a.75.75 0 01.75-.75z"
        fill={color}
      />
    </Svg>
  )
}

export default TimeCircleIcon
