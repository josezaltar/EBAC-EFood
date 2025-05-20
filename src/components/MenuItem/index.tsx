import { useState } from 'react'
import StyledMenuItem from './styles'
import { StyledMenuItemButton } from '../Button/styles'
import { MenuItemProps } from '../../utilities/types'
import ModalProduto from '../ModalProduto'

const MenuItem = (props: MenuItemProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

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
      />
    </>
  )
}

export default MenuItem
