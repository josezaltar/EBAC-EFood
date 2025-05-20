import { useEffect } from 'react'
import { Container, Overlay, CloseButton, AddToCartButton } from './styles'

type Props = {
  isVisible: boolean
  onClose: () => void
  item: {
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
  }
}

const ModalProduto = ({ isVisible, onClose, item }: Props) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!isVisible) return null

  return (
    <Overlay onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <img src={item.foto} alt={item.nome} />
        <div>
          <h2>{item.nome}</h2>
          <p>{item.descricao}</p>
          <p>
            <strong>Serve:</strong> {item.porcao}
          </p>
          <AddToCartButton onClick={() => alert('Adicionado ao carrinho')}>
            Adicionar ao carrinho – R$ {item.preco.toFixed(2)}
          </AddToCartButton>
        </div>
        <CloseButton onClick={onClose}>×</CloseButton>
      </Container>
    </Overlay>
  )
}

export default ModalProduto
