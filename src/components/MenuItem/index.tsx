import StyledMenuItem from './styles'
import { StyledMenuItemButton } from '../Button/styles'
import { MenuItemProps } from '../../utilities/types'

type Props = MenuItemProps & {
  onClick: () => void
}

const MenuItem = (props: Props) => (
  <StyledMenuItem>
    <img src={props.item_image} alt={props.item_name} />
    <h3>{props.item_name}</h3>
    <p>{props.item_description}</p>
    <StyledMenuItemButton onClick={props.onClick}>
      Mais detalhes
    </StyledMenuItemButton>
  </StyledMenuItem>
)

export default MenuItem
