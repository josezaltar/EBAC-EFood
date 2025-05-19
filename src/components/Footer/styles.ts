import styled from 'styled-components'
import { cores } from '../../styles/styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.bege};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

export const Logo = styled.img`
  height: 58px;
`

export const Text = styled.p`
  font-size: 14px;
  color: ${cores.rosa};
  text-align: center;
  line-height: 1.4;
`
