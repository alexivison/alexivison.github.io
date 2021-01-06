import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router'
import { useTransition } from 'react-spring'

import { 
  Container, 
  LeftButton, 
  Menu, 
  MenuContent,
  MenuHeader,
  MenuFooter,
  Twitter,
  Soundcloud,
  Github,
} from './styled'

import Image from '../../atoms/Image'

import { RouteMap } from '../../../routes'
import MenuIcon from '../../../res/icon/menu.svg'

interface Props {
  routes: RouteMap
  header?: { title: string, subTitle?: string }
}

const MobileNav: React.FC<Props> = ({ routes }) => {
  const [isOpen, setIsOpen] = useState(false)

  const { push } = useHistory()

  const transitions = useTransition(isOpen, null, {
    from: { position: 'absolute' as 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const onOpenMenu = useCallback(() => {
    setIsOpen(true)
  }, [])

  const onCloseMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  const onClickMenuItem = useCallback((route) => {
    onCloseMenu()
    push(route)
  }, [])

  return (
    <>
      <Container>
        <LeftButton onClick={onOpenMenu}>
          <Image mask={true} size={48} src={MenuIcon} />
        </LeftButton>
      </Container>
      {transitions.map(({ item, key, props }) => item && (
        <Menu key={key} style={props} onClick={onCloseMenu}>
          <MenuHeader></MenuHeader>
          <MenuContent>
            {Object.values(routes).map((route, index) => (
              <div key={index} onClick={() => onClickMenuItem(route.path)}>{route.title}</div>
            ))}
          </MenuContent>
          <MenuFooter>
            <Github />
            <Twitter />
            <Soundcloud />
          </MenuFooter>
        </Menu>
      ))}
    </>
  )
}

export default MobileNav