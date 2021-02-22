import React, { useRef } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import Tab from './Tab/Tab'
import { ItemT } from './types'

const TabsList = styled(FlatList as new () => FlatList<ItemT>)`
  margin-bottom: ${({ theme }) => theme.spacing.s};
  padding-left: ${({ theme }) => theme.spacing.m};
`

const contentContainerStyle = { paddingRight: 24 }

type Props = {
  activeTab: string
  data: Array<any>
  setActiveTab: (activeTab: string) => void
  setResults: (results: []) => void
}

const Tabs: React.FC<Props> = ({
  activeTab,
  data,
  setActiveTab,
  setResults,
}) => {
  const tabsRef = useRef<FlatList<ItemT>>(null)

  const handlePress = (index) => {
    setActiveTab(data[index].title)
    setResults(data[index].recommended)
    tabsRef.current?.scrollToIndex({ index })
  }

  return (
    <TabsList
      contentContainerStyle={contentContainerStyle}
      data={data}
      keyExtractor={(item) => item._id}
      ref={tabsRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <Tab
          isActive={activeTab === item.title}
          item={item}
          onPress={() => handlePress(index)}
        />
      )}
    />
  )
}

export default Tabs
