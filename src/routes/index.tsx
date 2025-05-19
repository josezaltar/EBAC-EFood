import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../paginas/Home'
import Product from '../paginas/Product'
import Checkout from '../paginas/Checkout'
import Cart from '../paginas/Cart'

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil/:id" element={<Product />} />
      <Route path="/carrinho" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </BrowserRouter>
)

export default Rotas
