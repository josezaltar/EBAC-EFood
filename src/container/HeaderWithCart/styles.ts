import { styled } from 'styled-components'
import { estilo } from '../../styles/variaveis'

const StyledHeaderWithCart = styled.header`
  height: 186px;
  background-color: ${estilo.corDaFonte2};
  display: flex;
  align-items: center;

  .container {
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-family: Roboto, sans-serif;
      font-weight: 900;
      font-size: 18px;
      color: #e66767;
    }

    img {
      width: 125px;
      height: 57.5px;
      object-fit: contain;
    }
  }
`

export default StyledHeaderWithCart
