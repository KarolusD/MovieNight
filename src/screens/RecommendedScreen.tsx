import { useNavigation } from '@react-navigation/native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Platform } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import styled, { ThemeContext } from 'styled-components/native'
import { RECOMMENDED } from '_api/constants'
import { IActiveRecommended, IRecommended } from '_api/types'
import FilmCard from '_components/FilmCard/FilmCard'
import Gradient from '_components/Gradient/Gradient'
import Tabs from '_components/Tabs/Tabs'
import { BottomNavigationProps } from '_navigation/BottomNavigation/types'
import ScreenTemplate from '_templates/ScreenTemplate'

const RecommendedList = styled(FlatList as new () => FlatList<IItem>)`
  padding: ${({ theme }) => `0 ${theme.spacing.m}`};
  width: 100%;
`

const TabsWrapper = styled.View<{ top: number }>`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  z-index: 999;
`

const FilmCardButton = styled.TouchableOpacity``

interface IItem {
  title: string
  poster: string
}

const RecommendedScreen: React.FC<BottomNavigationProps<'Favourites'>> = () => {
  const navigation = useNavigation()
  const theme = useContext(ThemeContext)
  const top = Platform.OS === 'ios' ? 180 : 164

  const recommendedListRef = useRef<FlatList<IItem> | null>(null)

  const [activeTab, setActiveTab] = useState('For you')
  const [recommended, setRecommended] = useState<IActiveRecommended[]>([])
  const [tabs, setTabs] = useState<IRecommended[]>([])

  const contentContainerStyle = {
    paddingTop: top + 60,
    paddingBottom: 100,
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
      <TabsWrapper top={top}>
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
          <FilmCardButton
            onPress={() => navigation.navigate('FilmDetails', { item })}
          >
            <FilmCard uri={item.poster} />
          </FilmCardButton>
        )}
        showsVerticalScrollIndicator={false}
      />
      <Gradient
        colors={[theme.colors.background, theme.colors.background]}
        locations={[0.85, 1]}
        opacity={[1, 0]}
        height={Platform.OS === 'ios' ? 256 : 232}
      />
    </ScreenTemplate>
  )
}

export default RecommendedScreen
