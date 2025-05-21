import { useEffect } from 'react'
import { Container, Overlay, AddToCartButton, CloseIcon } from './styles'

import closeIcon from '../../assets/images/close.png'

type Props = {
  isVisible: boolean
  onClose: () => void
  onAdd: () => void
  item: {
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
  }
}

const ModalProduto = ({ isVisible, onClose, onAdd, item }: Props) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!isVisible) return null

  const precoFormatado = item.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return (
    <Overlay onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <img src={item.foto} alt={item.nome} className="produto" />
        <div>
          <h2>{item.nome}</h2>
          <p>{item.descricao}</p>
          <p>
            <strong>Serve:</strong> {item.porcao}
          </p>
          <AddToCartButton onClick={onAdd}>
            Adicionar ao carrinho – {precoFormatado}
          </AddToCartButton>
        </div>
        <CloseIcon src={closeIcon} alt="Fechar" onClick={onClose} />
      </Container>
    </Overlay>
  )
}

export default ModalProduto
