import styled from 'styled-components'
import { estilo } from '../../styles/variaveis'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 80px;
  list-style: none;
  padding: 40px 0;
`

export const RestauranteCard = styled.li`
  background-color: ${estilo.corDoFundo};
  border: 1px solid ${estilo.corDaFonte};
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
  }

  div {
    padding: 16px;
    position: relative;
  }

  h2 {
    font-size: 18px;
    font-weight: 900;
    color: ${estilo.corDaFonte};
    margin-bottom: 8px;
    border-bottom: 2px solid ${estilo.corDaFonte};
    display: inline-block;
    padding-bottom: 4px;
  }

  p {
    font-size: 14px;
    color: #333;
    margin-bottom: 8px;
  }

  span {
    font-size: 14px;
    font-weight: bold;
    color: ${estilo.corDaEstrela};
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .tag {
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: ${estilo.corDaFonte};
    color: ${estilo.corDaFonte2};
    font-size: 12px;
    font-weight: bold;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .botao {
    margin-top: 16px;
    display: inline-block;
    font-size: 12px;
    background-color: ${estilo.corDaFonte};
    color: ${estilo.corDaFonte2};
    border: none;
    padding: 6px 12px;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
  }
`
