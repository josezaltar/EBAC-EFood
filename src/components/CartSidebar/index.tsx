import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { remover, fechar } from '../../store/reducers/cart'

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

const CartSidebar = () => {
  const dispatch = useDispatch()
  const { itens, isOpen } = useSelector((state: RootState) => state.cart)

  const total = itens.reduce((soma, item) => soma + item.preco, 0)

  if (!isOpen) return null

  return (
    <Overlay onClick={() => dispatch(fechar())}>
      <Sidebar onClick={(e) => e.stopPropagation()}>
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
        <ButtonFinalizar>Continuar com a entrega</ButtonFinalizar>
      </Sidebar>
    </Overlay>
  )
}

export default CartSidebar
