import PropTypes from 'prop-types'
import React, { useContext, useEffect, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { RECOMMENDED, TRENDING } from '_api/constants.js'
import { anyRoomImage_Dark, forMeImage_Dark } from '_assets/images/darkTheme'
import { anyRoomImage_Light, forMeImage_Light } from '_assets/images/lightTheme'
import { InfoIcon } from '_assets/svgs/icons'
import Button from '_components/Button/Button'
import IllustrationButton from '_components/IllustrationButton/IllustrationButton'
import Modal from '_components/Modal/Modal'
import PostersCarousel from '_components/PostersCarousel/PostersCarousel'
import Section from '_components/Section/Section'
import Tabs from '_components/Tabs/Tabs'
import useModal from '_hooks/useModal'
import FilmDetailsScreen from '_screens/FilmDetailsScreen/FilmDetailsScreen'
import ScreenTemplate from '_templates/ScreenTemplate/ScreenTemplate'

const FlexWrapper = styled.View`
  flex-direction: row;
  padding: 0px 16px;
  margin-top: 4px;
  justify-content: space-between;
`

const HomeScreen = ({ navigation, route }) => {
  const theme = useContext(ThemeContext)

  const { toggle, isVisible, title } = useModal(false)

  // TODO: Create custom hook (useRecommendedFilms) with api call, useState and useEffect
  const [tabs, setTabs] = useState([])
  const [activeTab, setActiveTab] = useState('For you')
  const [recommended, setRecommended] = useState([])

  // TODO: Create custom hook (useTrendingFilms) with api call, useState and useEffect
  const [trending, setTrending] = useState([])

  useEffect(() => {
    setTabs(RECOMMENDED)
    setRecommended(
      RECOMMENDED.filter(({ title }) => title === activeTab)[0].recommended
    )
    setTrending(TRENDING)
  }, [])

  return (
    <ScreenTemplate container="static">
      <Section
        title="Recommended"
        options={{
          displayButton: () => (
            <Button
              type="link"
              title="See all"
              color={theme.colors.info}
              onPress={() =>
                navigation.navigate('Favourites', {
                  screen: 'Recommended',
                })
              }
            />
          ),
        }}
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
          toggle={toggle}
        />
      </Section>
      <Section
        title="Trending"
        options={{
          displayButton: () => (
            <Button type="link" title="See all" color={theme.colors.info} />
          ),
        }}
      >
        <PostersCarousel
          data={trending}
          posterSize="medium"
          title="Trending"
          toggle={toggle}
        />
      </Section>
      <Section
        title="Let us choose for you"
        options={{
          displayButton: () => <InfoIcon color={theme.colors.info} />,
        }}
      >
        <FlexWrapper>
          <IllustrationButton
            borderColor={theme.colors.brand}
            illustrationHeight={80}
            illustrationWight={80}
            source={theme.mode === 'light' ? forMeImage_Light : forMeImage_Dark}
            title="Choose only for me"
            variant="left"
          />
          <IllustrationButton
            borderColor={theme.colors.info}
            illustrationHeight={80}
            illustrationWight={90}
            source={
              theme.mode === 'light' ? anyRoomImage_Light : anyRoomImage_Dark
            }
            title="Choose for any room"
            variant="right"
          />
        </FlexWrapper>
      </Section>
      <Modal isVisible={isVisible} title={title} toggle={toggle} isSwipeable>
        <FilmDetailsScreen />
      </Modal>
    </ScreenTemplate>
  )
}

HomeScreen.propTypes = {
  route: PropTypes.object,
}

export default HomeScreen
