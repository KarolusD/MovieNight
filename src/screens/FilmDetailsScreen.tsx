import React from 'react'
import Poster from '_components/Poster/Poster'
import { MainNavigationProps } from '_navigation/MainNavigation/types'
import ScreenTemplate from '_templates/ScreenTemplate'

const FilmDetailsScreen: React.FC<MainNavigationProps<'FilmDetails'>> = ({
  route,
}) => {
  console.log(route.params, 'film details')

  return (
    <ScreenTemplate container="static">
      <Poster
        uri="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2F9opbuc1v8aq31.jpg%3Fauto%3Dwebp%26s%3D21434ab780a31ce0dd7f21dc2184fb4d61aefd7b&f=1&nofb=1"
        size="medium"
      />
    </ScreenTemplate>
  )
}

export default FilmDetailsScreen
