import styled from 'styled-components'
import { cores } from '../../styles/styles'

export const Banner = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 280px;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`

export const Title = styled.h2`
  color: ${cores.branco};
  font-size: 36px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`

export const Container = styled.section`
  padding-bottom: 40px;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`
