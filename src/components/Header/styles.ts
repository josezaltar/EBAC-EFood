import styled from 'styled-components'
import { cores } from '../../styles/styles'

export const HeaderBar = styled.header`
  background-color: ${cores.bege};
  padding: 24px 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Logo = styled.img`
  height: 58px;
`

export const Links = styled.nav`
  display: flex;
  gap: 16px;
`

export const LinkItem = styled.a`
  color: ${cores.rosa};
  font-size: 18px;
  font-weight: bold;
`
