import React, { useContext, useState } from 'react'
import { Text } from 'react-native-svg'
import { ThemeContext } from 'styled-components'
import Button from '_components/Button/Button'
import { ParagraphText } from '_components/Typography'

interface Props {
  children: React.ReactNode
  numberOfLines: number
}

const MoreLessText: React.FC<Props> = ({ children, numberOfLines }) => {
  const theme = useContext(ThemeContext)
  const [isTextCollapsed, setIsTextCollapsed] = useState(false)
  const [showMore, setShowMore] = useState(true)

  return isTextCollapsed ? (
    <Text>
      <ParagraphText numberOfLines={showMore ? numberOfLines : 0}>
        {children}
      </ParagraphText>
      <Button
        color={theme.colors.info}
        onPress={() => setShowMore(!showMore)}
        textAlign="left"
        title={showMore ? 'Show more' : 'Less'}
        type="link"
      />
    </Text>
  ) : (
    <ParagraphText
      onTextLayout={({ nativeEvent: { lines } }) => {
        setIsTextCollapsed(lines?.length > numberOfLines)
      }}
    >
      {children}
    </ParagraphText>
  )
}

export default MoreLessText
