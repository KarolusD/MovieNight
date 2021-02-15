import React, { useContext, useEffect, useState, useRef } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { RECOMMENDED } from '_api/constants'
import FilmCard from '_components/FilmCard/FilmCard'
import Tabs from '_components/Tabs/Tabs'
import TopGradient from '_components/TopGradient/TopGradient'
import ScreenTemplate from '_templates/ScreenTemplate'

const RecommendedList = styled.FlatList`
  flex: 1;
  height: 100%;
  padding: ${({ theme }) => `0 ${theme.spacing.m}`};
  position: absolute;
  width: 100%;
`

const TabsWrapper = styled.View`
  position: absolute;
  top: 180px;
  z-index: 999;
`

const RecommendedScreen = ({ navigation }) => {
  const theme = useContext(ThemeContext)

  const recommendedListRef = useRef(null)

  const [activeTab, setActiveTab] = useState('For you')
  const [recommended, setRecommended] = useState([])
  const [tabs, setTabs] = useState([])

  const contentContainerStyle = {
    marginTop: 240,
    height: recommended.length > 5 ? '110%' : '100%',
  }

  useEffect(() => {
    setTabs(RECOMMENDED)
    setRecommended(
      RECOMMENDED.filter(({ title }) => title === activeTab)[0].recommended
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    recommendedListRef?.current?.scrollToOffset({ offset: 0, animated: true })
  }, [activeTab])

  return (
    <ScreenTemplate paddingTop="0" container="static">
      <TabsWrapper>
        <Tabs
          data={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setResults={setRecommended}
        />
      </TabsWrapper>
      <RecommendedList
        contentContainerStyle={contentContainerStyle}
        data={recommended}
        keyExtractor={(item) => item.title}
        ref={recommendedListRef}
        renderItem={({ item }) => (
          <FilmCard navigation={navigation} uri={item.poster} />
        )}
        showsVerticalScrollIndicator={false}
      />
      <TopGradient color={theme.colors.background} height="250px" />
    </ScreenTemplate>
  )
}

export default RecommendedScreen
