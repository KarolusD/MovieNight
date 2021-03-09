import { useState } from 'react'

interface IModal {
  toggle: () => void
  isVisible: boolean
  title: string | null
}

const useModal = (initialValue: boolean): IModal => {
  const [isVisible, setIsVisible] = useState(initialValue)
  const [title, setTitle] = useState(null)

  const toggle = (modalTitle = null) => {
    setIsVisible(!isVisible)
    modalTitle && setTitle(modalTitle)
  }

  return { toggle, isVisible, title }
}

export default useModal
