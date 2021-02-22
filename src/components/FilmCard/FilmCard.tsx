import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components/native'
import { ArrowRightSquareIcon } from '_assets/icons'
import Poster from '_components/Poster/Poster'
import { ButtonText, CaptionText } from '_components/Typography'
import { useNavigation } from '@react-navigation/native'

const Card = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.pureBg};
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing.s};
  height: 76px;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.xs};
  width: 100%;
`

const FilmMedia = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const FilmInfo = styled.View`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing.m};
`

const Arrow = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.brand};
  border-radius: 8px;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 34px;
`

type Props = {
  uri: string
}

const FilmCard: React.FC<Props> = ({ uri }) => {
  const navigation = useNavigation()
  const theme = useContext(ThemeContext)
  return (
    <Card
      onPress={() =>
        navigation.navigate('FilmDetails', { title: 'Recommended' })
      }
    >
      <FilmMedia>
        <Poster size="small" uri={uri} />
        <FilmInfo>
          <ButtonText>Film title</ButtonText>
          <CaptionText>Film desc</CaptionText>
        </FilmInfo>
      </FilmMedia>
      <Arrow>
        <ArrowRightSquareIcon
          color={
            theme.mode === 'light' ? theme.colors.text : theme.colors.background
          }
        />
      </Arrow>
    </Card>
  )
}

export default FilmCard
