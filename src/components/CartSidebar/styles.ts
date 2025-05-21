import styled from 'styled-components'
import { estilo } from '../../styles/variaveis'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9;
  display: flex;
  justify-content: flex-end;
`

export const Sidebar = styled.aside`
  width: 360px;
  background-color: ${estilo.corDaFonte};
  padding: 16px;
  height: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
`

export const CartItem = styled.div`
  display: flex;
  background-color: ${estilo.corDaFonte2};
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 8px;
  gap: 8px;
`

export const CartImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`

export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  h3 {
    font-size: 14px;
    font-weight: bold;
    color: ${estilo.corDaFonte};
    margin: 0;
  }

  p {
    margin: 0;
    font-weight: bold;
    font-size: 14px;
    color: ${estilo.corDaFonte};
  }
`

export const RemoveButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  color: ${estilo.corDaFonte};
  font-size: 18px;
  cursor: pointer;
`

export const TotalValue = styled.p`
  color: ${estilo.corDaFonte2};
  font-size: 16px;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: 16px;
  text-align: right;
`

export const ButtonFinalizar = styled.button`
  background-color: ${estilo.corDaFonte2};
  color: ${estilo.corDaFonte};
  font-size: 14px;
  font-weight: bold;
  border: none;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
`
