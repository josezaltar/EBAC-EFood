import {
  FormSection,
  Title,
  FieldGroup,
  Input,
  Label,
  Button,
  SuccessMessage
} from './styles'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import React from 'react'

const Checkout = () => {
  const [pedidoConfirmado, setPedidoConfirmado] = useState(false)

  const finalizarPedido = () => {
    setPedidoConfirmado(true)
  }

  return (
    <>
      <Header />
      <FormSection className="container">
        {!pedidoConfirmado ? (
          <>
            <Title>Entrega</Title>
            <FieldGroup>
              <Label htmlFor="endereco">Endereço</Label>
              <Input
                id="endereco"
                name="endereco"
                placeholder="Rua, número, complemento"
              />
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="cidade">Cidade</Label>
              <Input id="cidade" name="cidade" placeholder="Sua cidade" />
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="pagamento">Pagamento</Label>
              <Input
                id="pagamento"
                name="pagamento"
                placeholder="Cartão de crédito ou PIX"
              />
            </FieldGroup>
            <Button onClick={finalizarPedido}>Finalizar pedido</Button>
          </>
        ) : (
          <SuccessMessage>
            <h2>Pedido realizado com sucesso!</h2>
            <p>Em breve você receberá a confirmação no seu e-mail.</p>
          </SuccessMessage>
        )}
      </FormSection>
      <Footer />
    </>
  )
}

export default Checkout
