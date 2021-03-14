import React, { useContext } from 'react'
import Button from '_components/Button/Button'
import styled, { ThemeContext } from 'styled-components/native'
import Image from '_components/Image/Image'
import { dislikeLight, likeLight } from '_assets/images/lightTheme'
import { dislikeDark, likeDark } from '_assets/images/darkTheme'

const ActionsWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  width: 80%;
  justify-content: center;
`

const DislikeButton = styled.TouchableOpacity<{ activeAction?: string }>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.transparentWarning};
  border-radius: 12px;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.xl};
  height: 56px;
  width: 56px;
`

const LikeButton = styled.TouchableOpacity<{ activeAction?: string }>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.transparentSuccess};
  border-radius: 12px;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing.xl};
  height: 56px;
  width: 56px;
`

interface Props {
  activeAction?: string
}

const FilmActions: React.FunctionComponent<Props> = ({ activeAction }) => {
  const theme = useContext(ThemeContext)
  return (
    <ActionsWrapper>
      <DislikeButton activeAction={activeAction}>
        <Image
          height={40}
          width={40}
          source={theme.mode === 'light' ? dislikeLight : dislikeDark}
        />
      </DislikeButton>
      <Button
        backgroundColor={theme.colors.transparentInfo}
        borderColor={
          activeAction === 'ALREADY_SEEN' ? theme.colors.info : 'transparent'
        }
        color={theme.colors.info}
        onPress={() => console.log('Already seen!')}
        title="Already seen"
      />
      <LikeButton>
        <Image
          height={40}
          width={40}
          source={theme.mode === 'light' ? likeLight : likeDark}
        />
      </LikeButton>
    </ActionsWrapper>
  )
}

export default FilmActions
