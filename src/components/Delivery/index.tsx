import { useState } from 'react'
import {
  ButtonFinalizar,
  CartInfoTitle,
  CepNumero,
  FormEntrega,
  Formulario,
  Input
} from '../Delivery/styles'

type Props = {
  onVoltar: () => void
  onContinuar: (dadosEntrega: DeliveryPayload) => void
}

export type DeliveryPayload = {
  receiver: string
  address: {
    description: string
    city: string
    zipCode: string
    number: number
    complement?: string
  }
}

const EntregaSidebar = ({ onVoltar, onContinuar }: Props) => {
  const [receiver, setReceiver] = useState('')
  const [description, setDescription] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const dados: DeliveryPayload = {
      receiver,
      address: {
        description,
        city,
        zipCode,
        number: Number(number),
        complement
      }
    }

    onContinuar(dados)
  }

  return (
    <>
      <CartInfoTitle>Entrega</CartInfoTitle>
      <Formulario onSubmit={handleSubmit}>
        <FormEntrega>Quem irá receber</FormEntrega>
        <Input
          required
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />

        <FormEntrega>Endereço</FormEntrega>
        <Input
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <FormEntrega>Cidade</FormEntrega>
        <Input
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <CepNumero>
          <div style={{ flex: 1 }}>
            <FormEntrega>CEP</FormEntrega>
            <Input
              required
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          <div style={{ flex: 1 }}>
            <FormEntrega>Número</FormEntrega>
            <Input
              required
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </CepNumero>

        <FormEntrega>Complemento (opcional)</FormEntrega>
        <Input
          value={complement}
          onChange={(e) => setComplement(e.target.value)}
        />

        <ButtonFinalizar type="submit">
          Continuar com o pagamento
        </ButtonFinalizar>
        <ButtonFinalizar
          type="button"
          onClick={onVoltar}
          style={{ marginTop: '8px' }}
        >
          Voltar para o carrinho
        </ButtonFinalizar>
      </Formulario>
    </>
  )
}

export default EntregaSidebar
