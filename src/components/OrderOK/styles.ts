import styled from 'styled-components'
import { estilo } from '../../styles/variaveis'

export const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${estilo.corDaFonte2};
  margin-bottom: 16px;
`

export const Texto = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${estilo.corDaFonte2};
  width: 100%;
`

export const Botao = styled.button`
  background-color: ${estilo.corDaFonte2};
  color: ${estilo.corDaFonte};
  font-size: 14px;
  font-weight: bold;
  height: 32px;
  border: none;
  cursor: pointer;
  margin-top: 16px;
  text-align: center;

  &:hover {
    opacity: 0.9;
  }
`
