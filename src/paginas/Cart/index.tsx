import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CartSidebar from '../../components/CartSidebar'
import Modal from '../../components/Modal'
import pizzaImg from '../../assets/images/pizza.png'

type Item = {
  id: number
  name: string
  price: number
  image: string
}

const Cart = () => {
  const [isModalVisible, setModalVisible] = useState(false)

  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      name: 'Pizza Marguerita',
      price: 60.9,
      image: pizzaImg
    },
    {
      id: 2,
      name: 'Pizza Calabresa',
      price: 58.5,
      image: pizzaImg
    }
  ])

  const handleRemove = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const handleCheckout = () => {
    setModalVisible(true)
  }

  return (
    <>
      <Header />
      <CartSidebar
        items={items}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />
      {isModalVisible && <Modal onClose={() => setModalVisible(false)} />}
      <Footer />
    </>
  )
}

export default Cart
