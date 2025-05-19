import styled from 'styled-components'
import { cores } from '../../styles/styles'
import fundo from '../../assets/images/fundo.png'

export const Container = styled.section`
  padding: 40px 0;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`

export const Banner = styled.div`
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 64px 0;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 36px;
  color: ${cores.rosa};
  line-height: 1.2;
`
