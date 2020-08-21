import styled from 'styled-components'
import { animated } from 'react-spring'

import Image from '../../atoms/Image'

import ArrowRight from '../../../res/icon/arrow-right.svg'
import ArrowLeft from '../../../res/icon/arrow-left.svg'

export const Container = styled.div`
  height: 100%;

  ${({ theme }) => theme.isMobile  ? `
    display: flex;
    flex-direction: column-reverse;
  ` : `
    position: relative;
    display: grid;
    grid-gap: 48px;
    grid-template-columns: repeat(2, calc(50% - (48px / 2)));
  `}
`

export const LeftColumn = styled.div``

export const RightColumn = styled(animated.div)`
  position: absolute;

  ${({ theme }) => theme.isMobile ? `
    display: grid;
    grid-template-rows: 1fr auto;
    align-items: center;
    padding: 56px 24px 24px;
    height: 100%;
    width: 100vw;
  ` : `
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 8px;
    padding: 24px 16px;
    box-shadow: 0px 0px 16px 2px ${theme.highlight};
    width: calc(50% - (48px / 2));
    background: linear-gradient(75deg, ${theme.background} 0%, ${theme.highlight} 100%);
  `}
`

export const HogeContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
`

export const NextButton = styled(Image).attrs({
  mask: true,
  size: 48,
  src: ArrowRight,
})`
  justify-self: end;
  background-color: ${({ theme }) => theme.accent};
`

export const BackButton = styled(Image).attrs({
  mask: true,
  size: 48,
  src: ArrowLeft,
})`
  justify-self: start;
  background-color: ${({ theme }) => theme.accent};
`

export const Huuga = styled.div<{ stages: number }>`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(${({ stages }) => stages}, 1fr);
  width: 100vw;
  background-color: ${({ theme }) => theme.highlight};
`

export const InnerHuuga = styled.div<{ stage: number }>`
  grid-column: ${({ stage }) => stage};
  height: 8px;
  background-color: ${({ theme }) => theme.accent};
  transition: all .5s ease-in-out;
`
