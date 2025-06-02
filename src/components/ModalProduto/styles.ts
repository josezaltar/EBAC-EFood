import styled from 'styled-components'
import { estilo } from '../../styles/variaveis'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const Container = styled.div`
  background-color: ${estilo.corDaFonte};
  display: flex;
  flex-direction: row;
  max-width: 960px;
  width: 100%;
  border-radius: 8px;
  padding: 32px;
  position: relative;
  color: ${estilo.corDaFonte2};

  img {
    width: 280px;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 24px;
  }

  h2 {
    font-size: 22px;
    margin-bottom: 12px;
    color: ${estilo.corDoFundo};
  }

  p {
    font-size: 14px;
    margin-bottom: 12px;
    line-height: 1.4;
    color: ${estilo.corDoFundo};
  }

  strong,
  span {
    color: ${estilo.corDoFundo};
  }
`

export const AddToCartButton = styled.button`
  background-color: ${estilo.corDaFonte2};
  color: ${estilo.corDaFonte};
  padding: 12px 20px;
  border: none;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 16px;
  font-size: 14px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  color: ${estilo.corDoFundo};
  font-size: 24px;
  cursor: pointer;
  line-height: 1;
  padding: 0;
`
