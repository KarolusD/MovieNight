import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function ArrowLeftIcon(props) {
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
        d="M20 12.274a.75.75 0 01-.648.743l-.102.007h-15a.75.75 0 01-.102-1.493l.102-.007h15a.75.75 0 01.75.75z"
        fill={props.color}
      />
      <Path
        d="M10.829 17.767a.75.75 0 01-.974 1.136l-.084-.073-6.05-6.024a.75.75 0 01-.073-.978l.073-.085 6.05-6.025a.75.75 0 011.13.98l-.072.083-5.516 5.494 5.516 5.492z"
        fill={props.color}
      />
    </Svg>
  )
}

export default ArrowLeftIcon
