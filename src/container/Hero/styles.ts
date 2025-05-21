import { styled } from 'styled-components'
import { estilo } from '../../styles/variaveis'

export const HeroContainer = styled.div<{ imagem: string }>`
  height: 384px;
  position: relative;
  background-image: url(${(props) => props.imagem});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: #000;
    opacity: 0.5;
  }

  .container {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 32px;
  }
`

export const Tipo = styled.span`
  font-size: 32px;
  font-weight: 100;
  font-family: Roboto, sans-serif;
  color: ${estilo.corDoFundo};
  z-index: 2;
  margin-top: 25px;
  margin-bottom: 221px;
`

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: 900;
  font-family: Roboto, sans-serif;
  color: ${estilo.corDoFundo};
  z-index: 2;
`
