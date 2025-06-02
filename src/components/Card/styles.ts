import styled from 'styled-components'
import { estilo } from '../../styles/variaveis'

const StyledCard = styled.div`
  min-height: 400px;
  width: 472px;
  border: 1px solid ${estilo.corDaFonte};
  position: relative;
  background-color: ${estilo.corDoFundo};

  #card_container {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    gap: 8px;
  }

  #desc {
    padding: 8px;

    #card_header {
      display: flex;
      justify-content: space-between;

      h3 {
        font-size: 18px;
        font-weight: 900;
        line-height: 21.09px;
        text-align: center;
        color: ${estilo.corDaFonte};
      }

      #card_point {
        display: flex;
        gap: 8px;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: ${estilo.corDaEstrela};
      }
    }

    p {
      font-size: 14px;
      margin: 16px 0;
      color: ${estilo.corDaFonte};
    }
  }
`

const CardImg = styled.div`
  height: 218px;
  background-color: ${estilo.corDoFundo};
`

export default StyledCard
export { CardImg }
