import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function CloseIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.4}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.53 4.47a.75.75 0 010 1.06l-14 14a.75.75 0 01-1.06-1.06l14-14a.75.75 0 011.06 0z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.47 4.47a.75.75 0 011.06 0l14 14a.75.75 0 11-1.06 1.06l-14-14a.75.75 0 010-1.06z"
        fill={props.color}
      />
    </Svg>
  )
}

export default CloseIcon
