import React from 'react'
import HeaderBackground from './HeaderBackground'
import HeaderTitle from './HeaderTitle'

const headerOptions = (options) => {
  const { title } = options
  return {
    headerTransparent: true,
    headerBackground: () => <HeaderBackground />,
    headerTitle: () => <HeaderTitle title={title} />,
    ...options,
  }
}

export default headerOptions
