import { useState } from 'react'
import HeaderWithCart from '../../container/HeaderWithCart'
import MenuList from '../../container/MenuList'
import ModalProduto from '../../components/ModalProduto'

import logo_la_dolce_vita_trattoria from '../../assets/images/restaurants/la_dolce_vita_trattoria/la_dolce_vita_trattoria.png'
import logo_hioki_sushi from '../../assets/images/restaurants/hioki_sushi/hioki_sushi.png'
import pizza_marguerita from '../../assets/images/restaurants/la_dolce_vita_trattoria/pizza_marguerita.png'
import barca_tradicional from '../../assets/images/restaurants/hioki_sushi/barca_tradicional.jpg'
import { MenuItemProps, RestaurantPageProps } from '../../utilities/types'

const mock_itens: MenuItemProps[] = [
  {
    item_name: 'Pizza Margherita',
    item_description:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    item_image: pizza_marguerita
  },
  {
    item_name: 'Pizza Margherita',
    item_description:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    item_image: pizza_marguerita
  },
  {
    item_name: 'Pizza Margherita',
    item_description:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    item_image: pizza_marguerita
  },
  {
    item_name: 'Pizza Margherita',
    item_description:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    item_image: pizza_marguerita
  },
  {
    item_name: 'Pizza Margherita',
    item_description:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    item_image: pizza_marguerita
  },
  {
    item_name: 'Pizza Margherita',
    item_description:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    item_image: pizza_marguerita
  }
]

const mock_itens2: MenuItemProps[] = [
  {
    item_name: 'Barca Japonesa Tradicional - (40 Un.)',
    item_description:
      'A Barca Japonesa Tradicional é uma seleção refinada de 40 peças que celebra o equilíbrio e a diversidade da culinária oriental. Composta por 7 sashimis de salmão fresquíssimos, 6 sushis de salmão macios, 4 makis Filadélfia cremosos, 2 makis de salmão, 3 nigiris Skin levemente tostados e 3 uramakis de salmão grelhado, ela combina texturas e sabores de forma harmônica. Acompanha ainda 3 uramakis de salmão com cheddar e 4 joy tartar de salmão com finalização delicada. É a escolha ideal para quem deseja uma experiência completa e sofisticada da gastronomia japonesa, perfeita para compartilhar ou apreciar sozinho com elegância.',
    item_image: barca_tradicional
  },
  {
    item_name: 'Barca Japonesa Tradicional - (40 Un.)',
    item_description:
      'A Barca Japonesa Tradicional é uma seleção refinada de 40 peças que celebra o equilíbrio e a diversidade da culinária oriental. Composta por 7 sashimis de salmão fresquíssimos, 6 sushis de salmão macios, 4 makis Filadélfia cremosos, 2 makis de salmão, 3 nigiris Skin levemente tostados e 3 uramakis de salmão grelhado, ela combina texturas e sabores de forma harmônica. Acompanha ainda 3 uramakis de salmão com cheddar e 4 joy tartar de salmão com finalização delicada. É a escolha ideal para quem deseja uma experiência completa e sofisticada da gastronomia japonesa, perfeita para compartilhar ou apreciar sozinho com elegância.',
    item_image: barca_tradicional
  },
  {
    item_name: 'Barca Japonesa Tradicional - (40 Un.)',
    item_description:
      'A Barca Japonesa Tradicional é uma seleção refinada de 40 peças que celebra o equilíbrio e a diversidade da culinária oriental. Composta por 7 sashimis de salmão fresquíssimos, 6 sushis de salmão macios, 4 makis Filadélfia cremosos, 2 makis de salmão, 3 nigiris Skin levemente tostados e 3 uramakis de salmão grelhado, ela combina texturas e sabores de forma harmônica. Acompanha ainda 3 uramakis de salmão com cheddar e 4 joy tartar de salmão com finalização delicada. É a escolha ideal para quem deseja uma experiência completa e sofisticada da gastronomia japonesa, perfeita para compartilhar ou apreciar sozinho com elegância.',
    item_image: barca_tradicional
  },
  {
    item_name: 'Barca Japonesa Tradicional - (40 Un.)',
    item_description:
      'A Barca Japonesa Tradicional é uma seleção refinada de 40 peças que celebra o equilíbrio e a diversidade da culinária oriental. Composta por 7 sashimis de salmão fresquíssimos, 6 sushis de salmão macios, 4 makis Filadélfia cremosos, 2 makis de salmão, 3 nigiris Skin levemente tostados e 3 uramakis de salmão grelhado, ela combina texturas e sabores de forma harmônica. Acompanha ainda 3 uramakis de salmão com cheddar e 4 joy tartar de salmão com finalização delicada. É a escolha ideal para quem deseja uma experiência completa e sofisticada da gastronomia japonesa, perfeita para compartilhar ou apreciar sozinho com elegância.',
    item_image: barca_tradicional
  },
  {
    item_name: 'Barca Japonesa Tradicional - (40 Un.)',
    item_description:
      'A Barca Japonesa Tradicional é uma seleção refinada de 40 peças que celebra o equilíbrio e a diversidade da culinária oriental. Composta por 7 sashimis de salmão fresquíssimos, 6 sushis de salmão macios, 4 makis Filadélfia cremosos, 2 makis de salmão, 3 nigiris Skin levemente tostados e 3 uramakis de salmão grelhado, ela combina texturas e sabores de forma harmônica. Acompanha ainda 3 uramakis de salmão com cheddar e 4 joy tartar de salmão com finalização delicada. É a escolha ideal para quem deseja uma experiência completa e sofisticada da gastronomia japonesa, perfeita para compartilhar ou apreciar sozinho com elegância.',
    item_image: barca_tradicional
  },
  {
    item_name: 'Barca Japonesa Tradicional - (40 Un.)',
    item_description:
      'A Barca Japonesa Tradicional é uma seleção refinada de 40 peças que celebra o equilíbrio e a diversidade da culinária oriental. Composta por 7 sashimis de salmão fresquíssimos, 6 sushis de salmão macios, 4 makis Filadélfia cremosos, 2 makis de salmão, 3 nigiris Skin levemente tostados e 3 uramakis de salmão grelhado, ela combina texturas e sabores de forma harmônica. Acompanha ainda 3 uramakis de salmão com cheddar e 4 joy tartar de salmão com finalização delicada. É a escolha ideal para quem deseja uma experiência completa e sofisticada da gastronomia japonesa, perfeita para compartilhar ou apreciar sozinho com elegância.',
    item_image: barca_tradicional
  }
]

const mock_la_dolce_vita_trattoria: RestaurantPageProps = {
  name: 'La Dolce Vita Trattoria',
  food_type: 'Italiana',
  hero_image: logo_la_dolce_vita_trattoria,
  menu_itens: mock_itens
}

const mock_hioki_sushi: RestaurantPageProps = {
  name: 'Hioki Sushi',
  food_type: 'Japonesa',
  hero_image: logo_hioki_sushi,
  menu_itens: mock_itens2
}

const mock_page: { [key: string]: RestaurantPageProps } = {
  la_dolce_vita_trattoria: mock_la_dolce_vita_trattoria,
  hioki_sushi: mock_hioki_sushi
}

const Restaurants = () => {
  const [modalAberto, setModalAberto] = useState(false)
  const [itemSelecionado, setItemSelecionado] = useState<MenuItemProps | null>(
    null
  )

  const getRestaurantNameFromQuerie = window.location.search.substring(3)

  if (
    getRestaurantNameFromQuerie === '' &&
    window.location.pathname === '/restaurantes'
  ) {
    window.location.reload()
  }

  if (!Object.keys(mock_page).includes(getRestaurantNameFromQuerie)) {
    window.location.href = window.location.origin
  }

  const abrirModal = (item: MenuItemProps) => {
    setItemSelecionado(item)
    setModalAberto(true)
  }

  const fecharModal = () => {
    setModalAberto(false)
    setItemSelecionado(null)
  }

  document.title = 'eFood | ' + mock_page[getRestaurantNameFromQuerie].name

  return (
    <>
      <HeaderWithCart />
      <MenuList
        name={mock_page[getRestaurantNameFromQuerie].name}
        food_type={mock_page[getRestaurantNameFromQuerie].food_type}
        hero_image={mock_page[getRestaurantNameFromQuerie].hero_image}
        menu_itens={mock_page[getRestaurantNameFromQuerie].menu_itens}
        onDetalhesClick={abrirModal}
      />

      {modalAberto && itemSelecionado && (
        <ModalProduto
          isVisible={modalAberto}
          onClose={fecharModal}
          onAdd={() => {
            console.log('Adicionar ao carrinho clicado')
          }}
          item={{
            nome: itemSelecionado.item_name,
            descricao: itemSelecionado.item_description,
            foto: itemSelecionado.item_image,
            preco: 60.9,
            porcao: 'de 2 a 3 pessoas'
          }}
        />
      )}
    </>
  )
}

export default Restaurants
