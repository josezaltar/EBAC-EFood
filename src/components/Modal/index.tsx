import React from 'react'

import {
  Container,
  Overlay,
  CloseButton,
  Content,
  Image,
  Title,
  Description,
  Button
} from './styles'
import pizza from '../../assets/images/pizza.png'

type Props = {
  onClose: () => void
}

const Modal = ({ onClose }: Props) => {
  return (
    <Overlay>
      <Container>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Content>
          <Image src={pizza} alt="Pizza Marguerita" />
          <div>
            <Title>Pizza Marguerita</Title>
            <Description>
              A clássica pizza de marguerita coberta com molho de tomate
              artesanal, mussarela de búfala, tomate cereja e folhas frescas de
              manjericão. Massa leve, borda crocante e sabor inconfundível.
            </Description>
            <Button>Adicionar ao carrinho — R$ 60,90</Button>
          </div>
        </Content>
      </Container>
    </Overlay>
  )
}

export default Modal
