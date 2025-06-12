import styled from 'styled-components'
import { estilo } from '../../styles/variaveis'

export const CartInfoTitle = styled.h3`
  margin-top: 32px;
  margin-bottom: 16px;
  font-size: 16px;
  color: ${estilo.corDaFonte2};
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-bottom: 8px;

  label {
    margin-bottom: 4px;
    color: ${estilo.corDaFonte2};
  }
`

export const Input = styled.input`
  width: 100%;
  height: 32px;
  padding: 8px;
  border: 1px solid #ccc;
  background-color: ${estilo.corDaFonte2};
  color: ${estilo.corDaEntrega};
`

export const ButtonVoltar = styled.button`
  background-color: ${estilo.corDaFonte2};
  color: ${estilo.corDaFonte};
  font-size: 14px;
  height: 24px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin-top: 8px;
  text-align: center;
`

export const CepNumero = styled.div`
  display: flex;
  gap: 34px;
`

export const ButtonContinuar = styled.button`
  margin-top: 24px;
  background-color: ${estilo.corDaFonte2};
  color: ${estilo.corDaFonte};
  font-size: 14px;
  height: 24px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  text-align: center;
`
