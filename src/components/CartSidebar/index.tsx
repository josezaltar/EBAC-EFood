import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { remover, fechar } from '../../store/reducers/cart'
import { useState } from 'react'

import EntregaSidebar from '../Delivery'
import PagamentoSidebar from '../Pagamento'
import OrderOK from '../OrderOK'

import {
  Overlay,
  Sidebar,
  CartItem,
  CartImage,
  CartInfo,
  RemoveButton,
  TotalValue,
  ButtonFinalizar,
  CartInfoTitle,
  CartInfoPrice
} from './styles'

type Etapa = 'carrinho' | 'entrega' | 'pagamento' | 'confirmacao'

const CartSidebar = () => {
  const dispatch = useDispatch()
  const { itens, isOpen } = useSelector((state: RootState) => state.cart)
  const [etapa, setEtapa] = useState<Etapa>('carrinho')
  const [orderId, setOrderId] = useState<string>('')

  const total = itens.reduce((soma, item) => soma + item.preco, 0)

  const gerarOrderId = () => {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numeros = Math.floor(100000 + Math.random() * 900000)
    const prefixo =
      letras.charAt(Math.floor(Math.random() * letras.length)) +
      letras.charAt(Math.floor(Math.random() * letras.length)) +
      letras.charAt(Math.floor(Math.random() * letras.length))
    return `#${prefixo}${numeros}`
  }

  if (!isOpen) return null

  return (
    <Overlay onClick={() => dispatch(fechar())}>
      <Sidebar onClick={(e) => e.stopPropagation()}>
        {etapa === 'carrinho' && (
          <>
            {itens.map((item) => (
              <CartItem key={item.id}>
                <CartImage src={item.foto} alt={item.nome} />
                <CartInfo>
                  <CartInfoTitle>{item.nome}</CartInfoTitle>
                  <CartInfoPrice>R$ {item.preco.toFixed(2)}</CartInfoPrice>
                  <RemoveButton onClick={() => dispatch(remover(item.id))}>
                    🗑️
                  </RemoveButton>
                </CartInfo>
              </CartItem>
            ))}
            <TotalValue>Valor total: R$ {total.toFixed(2)}</TotalValue>
            <ButtonFinalizar
              onClick={() => {
                if (itens.length > 0) {
                  setEtapa('entrega')
                } else {
                  alert('O carrinho está vazio!')
                }
              }}
            >
              Continuar com a entrega
            </ButtonFinalizar>
          </>
        )}

        {etapa === 'entrega' && (
          <EntregaSidebar
            onVoltar={() => setEtapa('carrinho')}
            onContinuar={() => setEtapa('pagamento')}
          />
        )}

        {etapa === 'pagamento' && (
          <PagamentoSidebar
            valor={total}
            onVoltar={() => setEtapa('entrega')}
            onContinuar={() => {
              const novoId = gerarOrderId()
              setOrderId(novoId)
              setEtapa('confirmacao')
            }}
          />
        )}

        {etapa === 'confirmacao' && (
          <OrderOK
            orderId={orderId}
            onFechar={() => {
              dispatch(fechar())
              setEtapa('carrinho')
            }}
          />
        )}
      </Sidebar>
    </Overlay>
  )
}

export default CartSidebar
