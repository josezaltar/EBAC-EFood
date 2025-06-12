import styled from 'styled-components'
import { estilo } from '../../styles/variaveis'

export const CartInfoTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${estilo.corDaFonte2};
`

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
`

export const FormEntrega = styled.label`
  font-size: 14px;
  color: ${estilo.corDaFonte2};
  font-weight: 700;
`

export const Input = styled.input`
  margin-top: 8px;
  padding: 10px;
  font-size: 14px;
  background-color: ${estilo.corDaFonte2};
  margin-bottom: 8px;
  height: 32px;
  width: 100%;
  border: none;
`

export const CepNumero = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;

  > div {
    flex: 1;
  }
`

export const ButtonFinalizar = styled.button`
  background-color: ${estilo.corDaFonte2};
  color: ${estilo.corDaFonte};
  height: 24px;
  margin-top: 24px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.2s ease;
`
