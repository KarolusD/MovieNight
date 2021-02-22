import { useState } from 'react'

type ModalT = {
  toggle: () => void
  isVisible: boolean
  title: string | null
}

const useModal = (initialValue: boolean): ModalT => {
  const [isVisible, setIsVisible] = useState(initialValue)
  const [title, setTitle] = useState(null)

  const toggle = (modalTitle = null) => {
    setIsVisible(!isVisible)
    modalTitle && setTitle(modalTitle)
  }

  return { toggle, isVisible, title }
}

export default useModal
