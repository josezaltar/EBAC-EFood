import styled from 'styled-components'
import { cores } from '../../styles/styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

export const Container = styled.div`
  background-color: ${cores.rosa};
  padding: 32px;
  border-radius: 8px;
  width: 600px;
  color: ${cores.branco};
  position: relative;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  color: ${cores.branco};
  cursor: pointer;
`

export const Content = styled.div`
  display: flex;
  gap: 24px;

  img {
    border-radius: 8px;
  }
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
`

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
  line-height: 1.5;
`

export const Button = styled.button`
  background-color: ${cores.bege};
  color: ${cores.rosa};
  font-weight: bold;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`
