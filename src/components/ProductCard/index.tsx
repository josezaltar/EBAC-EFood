import {
  Container,
  Image,
  Title,
  Description,
  Infos,
  InfoTag,
  Button,
  Rating
} from './styles'

type Props = {
  title: string
  description: string
  image: string
  infos: string[]
  rating: number
  highlight?: boolean
}

const ProductCard = ({
  title,
  description,
  image,
  infos,
  rating,
  highlight
}: Props) => (
  <Container>
    <Image src={image} alt={title} />
    <Infos>
      {highlight && <InfoTag>Destaque da semana</InfoTag>}
      {infos.map((info, index) => (
        <InfoTag key={index}>{info}</InfoTag>
      ))}
    </Infos>
    <Title>{title}</Title>
    <Rating>{rating.toFixed(1)} ⭐</Rating>
    <Description>{description}</Description>
    <Button>Saiba mais</Button>
  </Container>
)

export default ProductCard
