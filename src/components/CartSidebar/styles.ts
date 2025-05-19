import styled from 'styled-components'
import { cores } from '../../styles/styles'

export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  width: 360px;
  padding: 32px 16px;
  color: ${cores.branco};
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${cores.branco};
  border-radius: 8px;
  padding: 8px;
  color: ${cores.preto};
`

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const ItemName = styled.h3`
  font-size: 16px;
  margin: 0;
`

export const ItemPrice = styled.span`
  font-weight: bold;
  font-size: 14px;
`

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${cores.rosa};
  font-size: 20px;
  cursor: pointer;
  align-self: flex-start;
`

export const TotalSection = styled.div`
  margin-top: auto;
  border-top: 1px solid ${cores.branco};
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TotalLabel = styled.span`
  font-size: 14px;
`

export const TotalValue = styled.strong`
  font-size: 18px;
`

export const CheckoutButton = styled.button`
  margin-top: 16px;
  padding: 12px;
  background-color: ${cores.bege};
  color: ${cores.rosa};
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`
