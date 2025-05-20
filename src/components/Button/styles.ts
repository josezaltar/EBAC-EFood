import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { estilo } from '../../styles/variaveis'

export const StyledCardButton = styled(Link)`
  height: 24px;
  width: max-content;
  padding: 4px 6px;
  background-color: ${estilo.corDaFonte};
  color: ${estilo.corDaFonte2};
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const StyledMenuItemButton = styled.button`
  background-color: ${estilo.corDaFonte2};
  color: ${estilo.corDaFonte};
  width: 100%;
  height: 24px;

  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`
