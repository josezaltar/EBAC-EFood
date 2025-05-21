import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/cart'

import StyledMenuItem from './styles'
import { StyledMenuItemButton } from '../Button/styles'
import { MenuItemProps } from '../../utilities/types'
import ModalProduto from '../ModalProduto'

const MenuItem = (props: MenuItemProps) => {
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleAddToCart = () => {
    dispatch(
      adicionar({
        id: Date.now(), // Se você não tiver ID no item, gera um único
        nome: props.item_name,
        foto: props.item_image,
        preco: props.item_price
      })
    )
    setIsModalVisible(false)
  }

  return (
    <>
      <StyledMenuItem>
        <img src={props.item_image} alt={props.item_name} />
        <h3>{props.item_name}</h3>
        <p>{props.item_description}</p>
        <StyledMenuItemButton onClick={() => setIsModalVisible(true)}>
          Adicionar ao carrinho
        </StyledMenuItemButton>
      </StyledMenuItem>

      <ModalProduto
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        item={{
          nome: props.item_name,
          descricao: props.item_description,
          foto: props.item_image,
          preco: props.item_price,
          porcao: props.item_portion
        }}
        onAdd={handleAddToCart} // ✅ Chamada do Redux
      />
    </>
  )
}

export default MenuItem
