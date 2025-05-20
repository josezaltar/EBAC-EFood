import { useEffect, useState } from 'react'
import HeaderWithCart from '../../container/HeaderWithCart'
import MenuList from '../../container/MenuList'
import { RestaurantPageProps } from '../../utilities/types'

const Restaurants = () => {
  const [restaurant, setRestaurant] = useState<RestaurantPageProps | null>(null)
  const getRestaurantId = window.location.search.substring(1) // ex: ?1

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r: any) => r.id.toString() === getRestaurantId)

        if (!found) {
          window.location.href = window.location.origin
        } else {
          const adaptado: RestaurantPageProps = {
            name: found.titulo,
            food_type: found.tipo,
            hero_image: found.capa,
            menu_itens: found.cardapio.map((item: any) => ({
              item_name: item.nome,
              item_description: item.descricao,
              item_image: item.foto,
              item_price: item.preco,
              item_portion: item.porcao
            }))
          }

          setRestaurant(adaptado)
          document.title = 'eFood | ' + adaptado.name
        }
      })
  }, [getRestaurantId])

  if (!restaurant) return <p>Carregando restaurante...</p>

  return (
    <>
      <HeaderWithCart />
      <MenuList
        name={restaurant.name}
        food_type={restaurant.food_type}
        hero_image={restaurant.hero_image}
        menu_itens={restaurant.menu_itens}
      />
    </>
  )
}

export default Restaurants
