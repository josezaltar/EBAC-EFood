import { RestaurantPageProps } from '../../utilities/types'
import StyledHero from './styles'

const Hero = (props: Omit<RestaurantPageProps, 'menu_itens'>) => (
  <StyledHero style={{ backgroundImage: `url(${props.hero_image})` }}>
    <div className="container">
      <h2>
        {props.food_type.charAt(0).toUpperCase() + props.food_type.slice(1)}
      </h2>
      <strong>{props.name}</strong>
    </div>
  </StyledHero>
)

export default Hero
