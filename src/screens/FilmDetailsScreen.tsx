import React, { useContext, useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled, { ThemeContext } from 'styled-components/native'
import { HeartIcon, TicketStarIcon, TimeCircleIcon } from '_assets/icons'
import Gradient from '_components/Gradient/Gradient'
import IconCard from '_components/IconCard/IconCard'
import MoreLessText from '_components/MoreLessText/MoreLessText'
import Poster from '_components/Poster/Poster'
import Tag from '_components/Tag/Tag'
import { HeaderText } from '_components/Typography'
import { MainNavigationProps } from '_navigation/BottomNavigation/types'
import ScreenTemplate from '_templates/ScreenTemplate'

const ImageWrapper = styled.View<IInsets>`
  position: relative;
  top: ${({ insets }) => `${insets.top}px`};
  width: 100%;
  height: 325px;
  overflow: hidden;
`

const PosterContainer = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 180%;
`

const FilmMedia = styled.View`
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const FilmInfo = styled(FlatList as new () => FlatList<IItem>)`
  padding-left: ${({ theme }) => theme.spacing.m};
  margin-top: ${({ theme }) => theme.spacing.m};
  margin-bottom: ${({ theme }) => theme.spacing.m};
`

const FilmDesc = styled.View`
  margin: ${({ theme }) => `0 ${theme.spacing.m}`};
  /* width: 300px; */
`

const Tags = styled.View`
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing.xs};
`

interface IInsets {
  insets: {
    top: number
    right: number
    bottom: number
    left: number
  }
}

interface IItem {
  icon: React.ReactElement
  title: string
  stats: string
}

const FilmDetailsScreen: React.FC<MainNavigationProps<'FilmDetails'>> = ({
  route,
}) => {
  const [data, setData] = useState<IItem[]>([])

  const theme = useContext(ThemeContext)

  const tagBackground =
    theme.mode === 'light' ? theme.colors.background : theme.colors.pureBg

  const backgroundColor =
    theme.mode === 'light' ? theme.colors.pureBg : theme.colors.background

  useEffect(() => {
    // TODO: make API call instead of static data here
    setData([
      {
        icon: <TimeCircleIcon color={theme.colors.text} />,
        title: 'Duration',
        stats: '122 min',
      },
      {
        icon: <HeartIcon color={theme.colors.text} />,
        title: 'Likes',
        stats: '567',
      },
      {
        icon: <TicketStarIcon color={theme.colors.text} />,
        title: 'Release',
        stats: '2019',
      },
    ])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { item } = route.params
  const insets = useSafeAreaInsets()

  return (
    <ScreenTemplate
      background={backgroundColor}
      container="scroll"
      top={-insets.top}
    >
      <ImageWrapper insets={insets}>
        <PosterContainer>
          <Poster uri={item.poster} size="container" />
        </PosterContainer>
      </ImageWrapper>
      <Gradient
        colors={[backgroundColor, backgroundColor]}
        locations={[0.5, 1]}
        opacity={[0, 1]}
        height={325 + insets.top}
      />
      <FilmMedia>
        <HeaderText textAlign="center" type="h1">
          Movie title
        </HeaderText>
        <Tags>
          <Tag background={tagBackground} name="Crime" />
          <Tag background={tagBackground} name="Drama" />
          <Tag background={tagBackground} name="Thriller" />
        </Tags>
        <FilmInfo
          data={data}
          horizontal
          renderItem={({ item }) => (
            <IconCard icon={item.icon} title={item.title} stats={item.stats} />
          )}
          keyExtractor={(item) => item.title}
          showsHorizontalScrollIndicator={false}
        />
      </FilmMedia>
      <FilmDesc>
        <MoreLessText numberOfLines={3}>
          Fuga nobis ut alias voluptates omnis dolores. Id vitae distinctio aut
          quibusdam distinctio et voluptates. Perferendis nesciunt quibusdam. Et
          possimus sequi laudantium dolor cum numquam adipisci voluptas. Itaque
          expedita tempore illum nulla. Deleniti dolor ut ut omnis voluptas et
          cumque consequatur culpa. Veritatis iure quia ut qui expedita.
          Distinctio consequatur ut est aut. Ut voluptates hic et labore in.
          Corrupti temporibus quasi debitis maxime dolorum quia reprehenderit
          sunt rerum. Ex dolor sit a sapiente laudantium consequatur deserunt
          vel aspernatur. Vel cupiditate aut ipsam. Atque quos et blanditiis.
        </MoreLessText>
      </FilmDesc>
    </ScreenTemplate>
  )
}

export default FilmDetailsScreen
