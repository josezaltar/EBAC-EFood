import styled from 'styled-components'
import { cores } from '../../styles/styles'

export const Container = styled.div`
  border: 1px solid ${cores.rosa};
  background-color: ${cores.branco};
  padding: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const InfoTag = styled.span`
  background-color: ${cores.rosa};
  color: ${cores.branco};
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
`

export const Title = styled.h3`
  font-size: 18px;
  color: ${cores.rosa};
  margin-top: 8px;
`

export const Rating = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${cores.rosa};
  margin: 4px 0;
`

export const Description = styled.p`
  font-size: 14px;
  color: ${cores.cinza};
  flex: 1;
  margin-bottom: 8px;
`

export const Button = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.branco};
  border: none;
  border-radius: 8px;
  padding: 8px;
  font-weight: bold;
  cursor: pointer;
`
