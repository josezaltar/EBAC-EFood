import StyledHeaderWithCart from './styles'
import efoodLogo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const HeaderWithCart = () => {
  const quantidade = useSelector((state: RootState) => state.cart.itens.length)

  return (
    <StyledHeaderWithCart>
      <div className="container">
        <Link to="/">
          <span>Restaurantes</span>
        </Link>
        <Link to="/">
          <img src={efoodLogo} alt="Logo do efood" />
        </Link>
        <span>
          {quantidade} produto{quantidade !== 1 ? 's' : ''} no carrinho
        </span>
      </div>
    </StyledHeaderWithCart>
  )
}

export default HeaderWithCart
