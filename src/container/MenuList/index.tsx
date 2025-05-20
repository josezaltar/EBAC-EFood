import StyledMenuList from './styles'
import Hero from '../Hero'
import MenuItem from '../../components/MenuItem'
import { RestaurantPageProps } from '../../utilities/types'

const MenuList = (props: RestaurantPageProps) => (
  <>
    <Hero
      food_type={props.food_type}
      name={props.name}
      hero_image={props.hero_image}
    />
    <div className="container">
      <StyledMenuList>
        {props.menu_itens.map((item, index) => (
          <MenuItem
            key={index}
            item_name={item.item_name}
            item_description={item.item_description}
            item_image={item.item_image}
            item_price={item.item_price}
            item_portion={item.item_portion}
          />
        ))}
      </StyledMenuList>
    </div>
  </>
)

export default MenuList
