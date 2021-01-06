import styled from 'styled-components'
import { animated } from 'react-spring'

import ExternalLink from '../../atoms/ExternalLink'

import TwitterLogo from '../../../res/img/twitter.svg'
import SoundcloudLogo from '../../../res/img/soundcloud.svg'
import GithubLogo from '../../../res/img/github.svg'

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: auto 1fr auto;
  justify-items: center;
  align-items: center;
  padding: 8px 16px;
  background: linear-gradient(180deg, #00000050, transparent);
`

export const LeftButton = styled.div``

export const RightButton = styled.div``

export const Menu = styled(animated.div)`
  position: absolute;
  top: 0;
  display: grid;
  grid-gap: 16px;
  grid-template-rows: auto 1fr auto;
  padding: 16px;
  padding-bottom: 32px;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.60);
  backdrop-filter: blur(16px);
  color: ${({ theme }) => theme.text};
`

export const MenuHeader = styled.div`
  justify-self: start;
`

export const MenuContent = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-auto-rows: min-content;
  font-size: 24px;
  justify-items: center;
`

export const MenuFooter = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-auto-flow: column;
`

export const Icon = styled(ExternalLink)<{ src: string }>`
  background-image: ${({ src }) => `url("${src}");`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.text};
  transition: all .2s ease-in-out;
`

export const Twitter = styled(Icon).attrs({ src: TwitterLogo, to: 'https://twitter.com/DJAlexIvison' })`
  &:hover {
    box-shadow: 0px 0px 0px 8px #1CA1F230;
    background-color: #1CA1F2;
  }
`

export const Soundcloud = styled(Icon).attrs({ src: SoundcloudLogo, to: 'https://soundcloud.com/alex_ivison' })`
  &:hover {
    box-shadow: 0px 0px 0px 8px #ff550030;
    background-color: #FF5500;
  }
`

export const Github = styled(Icon).attrs({ src: GithubLogo, to: 'https://github.com/alexivison' })`
  &:hover {
    box-shadow: 0px 0px 0px 8px #00000030;
    background-color: white;
  }
`