import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function PlayIcon(props) {
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
          d="M22 12.005C22 17.514 17.512 22 12 22S2 17.514 2 12.005C2 6.486 6.488 2 12 2s10 4.486 10 10.005z"
          fill={props.color}
        />
        <Path
          d="M16 12.005c0 .253-.08.506-.239.71-.03.04-.169.204-.278.31l-.06.059c-.835.885-2.913 2.217-3.967 2.644 0 .01-.627.263-.925.272h-.04c-.457 0-.884-.252-1.103-.66-.12-.225-.229-.876-.239-.885-.09-.584-.149-1.478-.149-2.46 0-1.03.06-1.963.169-2.537 0-.01.11-.535.179-.71.11-.251.308-.466.557-.602.199-.096.408-.146.626-.146.229.01.656.156.825.224 1.114.427 3.242 1.827 4.057 2.682.14.136.289.303.329.34.168.214.258.477.258.759z"
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25zm0 1.5a9.25 9.25 0 110 18.5 9.25 9.25 0 010-18.5z"
        fill={props.color}
      />
      <Path
        opacity={0.4}
        d="M10.787 7.759l-.112-.011a1.236 1.236 0 00-.623.15c-.25.133-.45.35-.562.617a1.536 1.536 0 00-.051.16l-.058.228-.051.238a5.248 5.248 0 00-.02.103c-.1.547-.158 1.387-.168 2.309l-.002.31c0 .978.053 1.909.153 2.522l.055.282c.054.25.126.518.184.63.222.428.672.692 1.15.676.204-.004.633-.147.93-.272 1.074-.451 2.963-1.716 3.837-2.57l.35-.365.116-.133.027-.035a1.246 1.246 0 00-.027-1.51l-.086-.099-.24-.256c-.825-.88-2.982-2.328-4.084-2.756a3.7 3.7 0 00-.718-.218zm.037 1.566l.133.048c.846.329 2.64 1.52 3.405 2.252l.228.235-.086.093c-.638.688-2.523 1.966-3.473 2.366l-.206.075-.052-.252c-.075-.46-.122-1.188-.131-1.98v-.585l.012-.55c.018-.534.055-1.007.105-1.353l.037-.214.028-.135z"
        fill={props.color}
      />
    </Svg>
  )
}

export default PlayIcon
