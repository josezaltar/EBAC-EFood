import StyledCardTag from './styles'

type Props = {
  children: string
}

const CardTag = (props: Props) => (
  <StyledCardTag>{props.children}</StyledCardTag>
)

export default CardTag
