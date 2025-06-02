import styled from 'styled-components'
import { estilo } from '../../styles/variaveis'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  list-style: none;
  padding: 40px 0;
`

export const RestauranteCard = styled.li`
  background-color: ${estilo.corDoFundo};
  border: 1px solid ${estilo.corDaFonte};
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  div {
    padding: 16px;
  }

  h2 {
    font-size: 20px;
    margin: 0 0 8px 0;
    color: ${estilo.corDaFonte};
  }

  p {
    margin: 0;
    color: ${estilo.corDaFonte};
  }

  span {
    display: block;
    margin-top: 8px;
    font-weight: bold;
    color: ${estilo.corDaEstrela};
  }
`
