import styled from 'styled-components'
import { estilo } from '../../styles/variaveis'

const StyledMenuItem = styled.div`
  width: 320px;
  height: 340px;
  padding: 8px;
  background-color: ${estilo.corDaFonte};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 170px;
    object-fit: cover;
    border-radius: 4px;
  }

  h3 {
    color: ${estilo.corDaFonte2};
    font-weight: 900;
    font-size: 16px;
    margin: 8px 0 4px;
  }

  p {
    color: ${estilo.corDaFonte2};
    font-size: 14px;
    margin: 0 0 8px;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`

export default StyledMenuItem
