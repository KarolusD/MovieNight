import React, { useContext, useEffect, useRef, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import styled, { ThemeContext } from 'styled-components/native'
import { RECOMMENDED } from '_api/constants'
import { ActiveRecommendedT, RecommendedT } from '_api/types'
import FilmCard from '_components/FilmCard/FilmCard'
import Tabs from '_components/Tabs/Tabs'
import TopGradient from '_components/TopGradient/TopGradient'
import { MainNavigationProps } from '_navigation/MainNavigation/types'
import ScreenTemplate from '_templates/ScreenTemplate'

const RecommendedList = styled(FlatList as new () => FlatList<ItemT>)`
  flex: 1;
  height: 100%;
  padding: ${({ theme }) => `0 ${theme.spacing.m}`};
  position: absolute;
  width: 100%;
`

const TabsWrapper = styled.View`
  position: absolute;
  top: 140px;
  z-index: 999;
`

type ItemT = {
  title: string
  poster: string
}

const RecommendedScreen: React.FC<MainNavigationProps<'Favourites'>> = () => {
  const theme = useContext(ThemeContext)

  const recommendedListRef = useRef<FlatList<ItemT> | null>(null)

  const [activeTab, setActiveTab] = useState('For you')
  const [recommended, setRecommended] = useState<ActiveRecommendedT[]>([])
  const [tabs, setTabs] = useState<RecommendedT[]>([])

  const contentContainerStyle = {
    marginTop: 188,
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
    <ScreenTemplate container="static">
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
        renderItem={({ item }) => <FilmCard uri={item.poster} />}
        showsVerticalScrollIndicator={false}
      />
      <TopGradient color={theme.colors.background} height={190} />
    </ScreenTemplate>
  )
}

export default RecommendedScreen
