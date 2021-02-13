import { TabActions } from '@react-navigation/native'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import styled from 'styled-components'
import Tab from './Tab/Tab'

const TabsList = styled.FlatList`
  margin-bottom: ${({ theme }) => theme.spacing.s};
  padding-left: ${({ theme }) => theme.spacing.m};
`

const Tabs = ({ activeTab, data, setActiveTab, setResults }) => {
  const tabsRef = useRef(null)

  const handlePress = (index) => {
    setActiveTab(data[index].title)
    setResults(data[index].recommended)
    tabsRef.current.scrollToIndex({ index })
  }
  return (
    <TabsList
      contentContainerStyle={{ paddingRight: 24 }}
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
    ></TabsList>
  )
}

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  setResults: PropTypes.func.isRequired,
}

export default Tabs
