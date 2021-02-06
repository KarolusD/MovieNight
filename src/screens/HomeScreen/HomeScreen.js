import PropTypes from 'prop-types'
import React, { useContext, useEffect, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { RECOMMENDED, TRENDING } from '_api/constants.js'
import { InfoIcon } from '_assets/svgs/icons'
import Button from '_components/Button/Button'
import Posters from '_components/Posters/Posters'
import Tabs from '_components/Tabs/Tabs'
import ScreenTemplate from '_templates/ScreenTemplate/ScreenTemplate'
import IllustrationButton from '_components/IllustrationButton/IllustrationButton'
import { forMeImage_Light, anyRoomImage_Light } from '_assets/images/lightTheme'
import { forMeImage_Dark, anyRoomImage_Dark } from '_assets/images/darkTheme'
import Section from '_components/Section/Section'

const FlexWrapper = styled.View`
  flex-direction: row;
  padding: 0px 16px;
  margin-top: 4px;
  justify-content: space-between;
`

const HomeScreen = ({ navigation, route }) => {
  const theme = useContext(ThemeContext)

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
    <ScreenTemplate>
      <Section
        title="Recommended"
        options={{
          displayButton: () => (
            <Button
              type="link"
              title="See all"
              color={theme.colors.info}
              onPress={() =>
                navigation.navigate('Favourites', { screen: 'Recommended' })
              }
            />
          ),
        }}
      >
        <Tabs
          data={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setResults={setRecommended}
        />
        <Posters data={recommended} posterSize="large" />
      </Section>
      <Section
        title="Trending"
        options={{
          displayButton: () => (
            <Button type="link" title="See all" color={theme.colors.info} />
          ),
        }}
      >
        <Posters data={trending} posterSize="medium" />
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
            title={`Choose only for me`}
            variant="left"
          />
          <IllustrationButton
            borderColor={theme.colors.info}
            illustrationHeight={80}
            illustrationWight={90}
            source={
              theme.mode === 'light' ? anyRoomImage_Light : anyRoomImage_Dark
            }
            title={`Choose for any room`}
            variant="right"
          />
        </FlexWrapper>
      </Section>
    </ScreenTemplate>
  )
}

HomeScreen.propTypes = {
  route: PropTypes.object,
}

export default HomeScreen
