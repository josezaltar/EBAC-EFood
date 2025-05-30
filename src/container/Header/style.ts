import { styled } from 'styled-components'
import { estilo } from '../../styles/variaveis'

const StyledHeader = styled.header`
  height: 384px;
  background-color: ${estilo.corDaFonte2};
  padding-top: 64px;
  padding-bottom: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    width: 540px;
    font-size: 36px;
    line-height: 42.19px;
    font-weight: 900;
    text-align: center;
    color: ${estilo.corDaFonte};
  }
`

export default StyledHeader
