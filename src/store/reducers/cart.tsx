import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Produto = {
  id: number
  nome: string
  foto: string
  preco: number
}

type CartState = {
  itens: Produto[]
  isOpen: boolean
}

const initialState: CartState = {
  itens: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      state.itens.push(action.payload)
      state.isOpen = true // Abre o carrinho automaticamente
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    abrir: (state) => {
      state.isOpen = true
    },
    fechar: (state) => {
      state.isOpen = false
    },
    limpar: (state) => {
      state.itens = []
      state.isOpen = false
    }
  }
})

export const { adicionar, remover, abrir, fechar, limpar } = cartSlice.actions
export default cartSlice.reducer
