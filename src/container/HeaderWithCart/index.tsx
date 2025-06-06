import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Link } from 'react-router-dom'
import { abrir } from '../../store/reducers/cart'
import { FaShoppingCart } from 'react-icons/fa'
import { StyledHeaderWithCart, StyledLink } from './styles'
import efoodLogo from '../../assets/images/logo.svg'

// Solução de Contorno: Diga explicitamente ao TypeScript que este é um componente
const ShoppingCartIcon = FaShoppingCart as React.ElementType

const HeaderWithCart = () => {
  const dispatch = useDispatch()
  const quantidade = useSelector((state: RootState) => state.cart.itens.length)

  const handleOpenCart = () => {
    dispatch(abrir())
  }

  return (
    <StyledHeaderWithCart>
      <div className="container">
        <StyledLink to="/">
          <span>Restaurantes</span>
        </StyledLink>
        <Link to="/">
          <img src={efoodLogo} alt="Logo do efood" />
        </Link>
        <span
          onClick={handleOpenCart}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          {/* Use o componente tipado aqui */}
          <span style={{ fontSize: '14px', fontWeight: 'bold' }}>
            {quantidade} produto{quantidade !== 1 ? 's' : ''} no carrinho
          </span>
          <ShoppingCartIcon size={24} style={{ marginRight: '8px' }} />{' '}
        </span>
      </div>
    </StyledHeaderWithCart>
  )
}

export default HeaderWithCart
