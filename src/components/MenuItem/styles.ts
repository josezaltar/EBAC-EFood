import styled from 'styled-components'
import { estilo } from '../../styles/variaveis'

const StyledMenuItem = styled.div`
  width: 320px;
  height: 338px;
  padding: 8px;
  background-color: ${estilo.corDaFonte};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;

  img {
    width: 304px;
    height: 167px;
    object-fit: cover;
  }

  h3 {
    width: 304px;
    color: ${estilo.corDaFonte2};
    font-weight: 900;
    font-size: 16px;
    line-height: 19px;
    margin: 10px;
  }

  p {
    width: 304px;
    color: ${estilo.corDaFonte2};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin: 0 0 8px;
    height: 66px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  button {
    width: 304px;
    height: 24px;
    background-color: ${estilo.corDaFonte2};
    color: ${estilo.corDaFonte};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: auto;
  }
`

export default StyledMenuItem
