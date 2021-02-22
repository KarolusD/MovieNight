import React, { useContext, useEffect, useState } from 'react'
import styled, { ThemeContext } from 'styled-components/native'
import { RECOMMENDED, TRENDING } from '_api/constants'
import { InfoIcon } from '_assets/icons'
import { anyRoomImageDark, forMeImageDark } from '_assets/images/darkTheme'
import { anyRoomImageLight, forMeImageLight } from '_assets/images/lightTheme'
import Button from '_components/Button/Button'
import IllustrationButton from '_components/IllustrationButton/IllustrationButton'
import PostersCarousel from '_components/PostersCarousel/PostersCarousel'
import Section from '_components/Section/Section'
import Tabs from '_components/Tabs/Tabs'
import useModal from '_hooks/useModal'
import { MainNavigationProps } from '_navigation/MainNavigation/types'
import ScreenTemplate from '_templates/ScreenTemplate'
import { RecommendedT, ActiveRecommendedT, TrendingT } from '_api/types'

const FlexWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.xxs};
  padding: 0px 16px;
`

const HomeScreen: React.FC<MainNavigationProps<'Home'>> = ({ navigation }) => {
  const theme = useContext(ThemeContext)

  const { toggle, isVisible, title } = useModal(false)

  // TODO: Create custom hook (useRecommendedFilms) with api call, useState and useEffect
  const [tabs, setTabs] = useState<RecommendedT[]>([])
  const [activeTab, setActiveTab] = useState('For you')
  const [recommended, setRecommended] = useState<ActiveRecommendedT[]>([])

  // TODO: Create custom hook (useTrendingFilms) with api call, useState and useEffect
  const [trending, setTrending] = useState<TrendingT[]>([])

  useEffect(() => {
    setTabs(RECOMMENDED)
    const activeRecommended = RECOMMENDED.filter(
      ({ title }) => title === activeTab
    )[0].recommended
    setRecommended(activeRecommended)
    setTrending(TRENDING)
  }, [activeTab])

  return (
    <ScreenTemplate container="static" paddingTop={80}>
      <Section
        title="Recommended"
        displayButton={() => (
          <Button
            color={theme.colors.info}
            onPress={() =>
              navigation.navigate('Favourites', {
                screen: 'TopTabs',
                params: {
                  screen: 'Recommended',
                },
              })
            }
            title="See all"
            type="link"
          />
        )}
      >
        {tabs.length > 1 && (
          <Tabs
            data={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setResults={setRecommended}
          />
        )}
        <PostersCarousel
          data={recommended}
          posterSize="large"
          title="Recommended"
        />
      </Section>
      <Section
        title="Trending"
        displayButton={() => (
          <Button
            color={theme.colors.info}
            onPress={() => console.log('Trending')}
            type="link"
            title="See all"
          />
        )}
      >
        <PostersCarousel data={trending} posterSize="medium" title="Trending" />
      </Section>
      <Section
        title="Let us choose for you"
        displayButton={() => <InfoIcon color={theme.colors.info} />}
      >
        <FlexWrapper>
          <IllustrationButton
            borderColor={theme.colors.brand}
            illustrationHeight={80}
            illustrationWidth={80}
            onPress={() => console.log('ilustracja 1')}
            source={theme.mode === 'light' ? forMeImageLight : forMeImageDark}
            title="Choose only for me"
            variant="left"
          />
          <IllustrationButton
            borderColor={theme.colors.info}
            illustrationHeight={80}
            illustrationWidth={90}
            onPress={() => console.log('ilustracja 2')}
            source={
              theme.mode === 'light' ? anyRoomImageLight : anyRoomImageDark
            }
            title="Choose for any room"
            variant="right"
          />
        </FlexWrapper>
      </Section>
      {/* <Modal isVisible={isVisible} title={title} toggle={toggle} isSwipeable>
        <FilmDetailsScreen navigation={navigation} route={route} />
      </Modal> */}
    </ScreenTemplate>
  )
}

export default HomeScreen
