import { styled } from 'styled-components'
import { estilo } from '../../styles/variaveis'

const StyledHero = styled.div`
  height: 280px;
  background-color: rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-position: center;
  background-blend-mode: color;
  display: flex;
  align-items: center;

  .container {
    width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h2 {
      color: ${estilo.corDoFundo};
      font-family: Roboto, sans-serif;
      font-size: 32px;
      margin-bottom: 156px;
    }

    strong {
      color: ${estilo.corDoFundo};
      font-family: Roboto, sans-serif;
      font-weight: 900;
      font-size: 32px;
      line-height: 100%;
    }
  }
`

export default StyledHero
