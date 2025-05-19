import React from 'react'
import {
  Sidebar,
  CartItem,
  ProductImage,
  ItemInfo,
  ItemName,
  ItemPrice,
  RemoveButton,
  TotalSection,
  TotalLabel,
  TotalValue,
  CheckoutButton
} from './styles'

export type Item = {
  id: number
  name: string
  image: string
  price: number
}

type Props = {
  items: Item[]
  onRemove: (id: number) => void
  onCheckout: () => void
}

const CartSidebar = ({ items, onRemove, onCheckout }: Props) => {
  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <Sidebar>
      {items.map((item) => (
        <CartItem key={item.id}>
          <ProductImage src={item.image} alt={item.name} />
          <ItemInfo>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>R$ {item.price.toFixed(2).replace('.', ',')}</ItemPrice>
          </ItemInfo>
          <RemoveButton onClick={() => onRemove(item.id)}>×</RemoveButton>
        </CartItem>
      ))}

      <TotalSection>
        <TotalLabel>Valor total:</TotalLabel>
        <TotalValue>R$ {total.toFixed(2).replace('.', ',')}</TotalValue>
      </TotalSection>

      <CheckoutButton onClick={onCheckout}>
        Continuar com a entrega
      </CheckoutButton>
    </Sidebar>
  )
}

export default CartSidebar
