import { useState } from 'react'

const useModal = (initialState) => {
  const [isVisible, setIsVisible] = useState(initialState)
  const [title, setTitle] = useState(null)

  const toggle = (modalTitle = null) => {
    setIsVisible(!isVisible)
    modalTitle && setTitle(modalTitle)
  }

  return { toggle, isVisible, title }
}

export default useModal
