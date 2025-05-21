import { HeroContainer, Titulo, Tipo } from './styles'

type Props = {
  name: string
  food_type: string
  hero_image: string
}

const Hero = ({ name, food_type, hero_image }: Props) => (
  <HeroContainer imagem={hero_image}>
    <div className="container">
      {' '}
      <Tipo>{food_type}</Tipo>
      <Titulo>{name}</Titulo>
    </div>
  </HeroContainer>
)

export default Hero
