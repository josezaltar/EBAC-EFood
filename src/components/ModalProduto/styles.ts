import styled from 'styled-components'
import { estilo } from '../../styles/variaveis'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const Container = styled.div`
  background-color: ${estilo.corDaFonte};
  display: flex;
  flex-direction: row;
  width: 1024px;
  height: 344px;
  border-radius: 8px;
  padding: 32px;
  position: relative;
  color: ${estilo.corDaFonte2};
  box-sizing: border-box;

  img.produto {
    width: 280px;
    height: 280px;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 24px;
  }

  div {
    max-width: 656px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  h2 {
    font-size: 18px;
    font-weight: 900;
    line-height: 100%;
    font-family: Roboto, sans-serif;
    color: #ffffff;
    margin-bottom: 12px;
    text-align: left;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    font-family: Roboto, sans-serif;
    color: ${estilo.corDoFundo};
    margin-bottom: 12px;

    strong {
      font-weight: 700;
      color: ${estilo.corDoFundo};
    }
  }
`

export const AddToCartButton = styled.button`
  width: 218px;
  height: 24px;
  padding: 0;
  background-color: #ffebd9;
  color: #e66767;
  border: 1px solid #e66767;
  border-radius: 0;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  margin-top: 16px;
  align-self: flex-start;
`

export const CloseIcon = styled.img`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 16px;
  height: 16px;
  object-fit: contain;
  cursor: pointer;
  z-index: 1;
`
