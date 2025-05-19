import React from 'react'

import { FooterContainer, Logo, Text } from './styles'
import logo from '../../assets/images/logo.png'

const Footer = () => (
  <FooterContainer>
    <Logo src={logo} alt="efood" />
    <Text>
      © 2025 efood. Todos os direitos reservados. <br />
      Rua da Comida, 123 – Divinópolis – MG
    </Text>
  </FooterContainer>
)

export default Footer
