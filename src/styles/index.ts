import { createGlobalStyle } from 'styled-components'
import { estilo } from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: ${estilo.corDaFonte};
  }

  .container {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
}
`

export default EstiloGlobal
