import { Container, Title, Texto, Botao } from './styles'

type Props = {
  orderId: string
  onFechar: () => void
}

const OrderOK = ({ orderId, onFechar }: Props) => {
  return (
    <Container>
      <Title>Pedido realizado - {orderId}</Title>
      <Texto>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </Texto>
      <Texto>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </Texto>
      <Texto>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </Texto>
      <Texto>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </Texto>
      <Botao onClick={onFechar}>Concluir</Botao>
    </Container>
  )
}

export default OrderOK
