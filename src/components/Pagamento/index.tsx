import { useState } from 'react'
import {
  Input,
  ButtonVoltar,
  CartInfoTitle,
  FormGroup,
  CepNumero,
  ButtonContinuar
} from './styles'

type Props = {
  valor: number
  onVoltar: () => void
  onContinuar: (dadosPagamento: PaymentPayload) => void
}

export type PaymentPayload = {
  card: {
    name: string
    number: string
    code: number
    expires: {
      month: number
      year: number
    }
  }
}

const PagamentoSidebar = ({ valor, onVoltar, onContinuar }: Props) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [code, setCode] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const handleSubmit = () => {
    const dados: PaymentPayload = {
      card: {
        name,
        number,
        code: Number(code),
        expires: {
          month: Number(month),
          year: Number(year)
        }
      }
    }

    onContinuar(dados)
  }

  return (
    <>
      <CartInfoTitle>
        Pagamento - Valor a pagar R$ {valor.toFixed(2)}
      </CartInfoTitle>

      <FormGroup>
        <label htmlFor="nome">Nome no cartão</label>
        <Input
          type="text"
          id="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>

      <CepNumero>
        <FormGroup style={{ flex: 2 }}>
          <label htmlFor="numeroCartao">Número do cartão</label>
          <Input
            type="text"
            id="numeroCartao"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </FormGroup>

        <FormGroup style={{ flex: 1 }}>
          <label htmlFor="cvv">CVV</label>
          <Input
            type="text"
            id="cvv"
            required
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </FormGroup>
      </CepNumero>

      <CepNumero>
        <FormGroup>
          <label htmlFor="mes">Mês de vencimento</label>
          <Input
            type="text"
            id="mes"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="ano">Ano de vencimento</label>
          <Input
            type="text"
            id="ano"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </FormGroup>
      </CepNumero>

      <ButtonContinuar onClick={handleSubmit}>
        Finalizar pagamento
      </ButtonContinuar>

      <ButtonVoltar onClick={onVoltar}>
        Voltar para a edição de endereço
      </ButtonVoltar>
    </>
  )
}

export default PagamentoSidebar
