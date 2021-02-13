import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function ArrowRightSquare(props) {
  if (props.filled) {
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
          d="M7.916 22h8.168C19.623 22 22 19.724 22 16.335v-8.67C22 4.276 19.623 2 16.084 2H7.916C4.378 2 2 4.277 2 7.666v8.67C2 19.723 4.378 22 7.916 22"
          fill={props.color}
        />
        <Path
          d="M12.855 16.28l3.765-3.749a.773.773 0 000-1.064L12.855 7.72a.75.75 0 00-1.059 1.064l2.478 2.467H7.918a.75.75 0 100 1.5h6.356l-2.477 2.466a.749.749 0 00-.003 1.061.751.751 0 001.061.002"
          fill={props.color}
        />
      </Svg>
    )
  }
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
        d="M2 7.665v8.669C2 19.738 4.43 22 7.916 22h8.168C19.57 22 22 19.738 22 16.334V7.665C22 4.268 19.567 2 16.084 2H7.916C4.429 2 2 4.261 2 7.665zm1.5 8.669V7.665C3.5 5.115 5.235 3.5 7.916 3.5h8.168c2.677 0 4.416 1.621 4.416 4.165v8.669c0 2.55-1.735 4.166-4.416 4.166H7.916c-2.681 0-4.416-1.616-4.416-4.166z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.72 15.3a.75.75 0 001.131.98l3.764-3.749h.002a.757.757 0 00.07-.082l.002-.002a.75.75 0 00-.073-.978L12.852 7.72l-.085-.073a.75.75 0 00-.976.075l-.073.084a.75.75 0 00.075.976l2.476 2.467H7.914l-.102.007a.75.75 0 00.102 1.493h6.357l-2.478 2.467-.073.083z"
        fill={props.color}
      />
    </Svg>
  )
}

export default ArrowRightSquare
