import React from 'react'

import logo from '../../assets/images/logo.png'
import { HeaderBar, Logo, Links, LinkItem } from './styles'

const Header = () => (
  <HeaderBar>
    <div className="container">
      <Logo src={logo} alt="efood" />
      <Links>
        <LinkItem href="/">Home</LinkItem>
        <LinkItem href="/perfil/1">Restaurantes</LinkItem>
      </Links>
    </div>
  </HeaderBar>
)

export default Header
