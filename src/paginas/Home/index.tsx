import ProductCard from '../../components/ProductCard'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, List, Banner, Title } from './styles'

import sushiImg from '../../assets/images/sushi.png'
import pastaImg from '../../assets/images/pizza.png'

const Home = () => {
  return (
    <>
      <Header />
      <Banner>
        <div className="container">
          <Title>
            Viva experiências gastronômicas <br /> no conforto da sua casa
          </Title>
        </div>
      </Banner>
      <Container className="container">
        <List>
          <ProductCard
            title="Hioki Sushi"
            description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
            image={sushiImg}
            infos={['Destaque da semana', 'Japonesa']}
            rating={4.9}
            highlight
          />
          <ProductCard
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            image={pastaImg}
            infos={['Italiana']}
            rating={4.6}
          />
          {/* Duplicando o mesmo restaurante para fins de layout */}
          <ProductCard
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            image={pastaImg}
            infos={['Italiana']}
            rating={4.6}
          />
          <ProductCard
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            image={pastaImg}
            infos={['Italiana']}
            rating={4.6}
          />
          <ProductCard
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            image={pastaImg}
            infos={['Italiana']}
            rating={4.6}
          />
          <ProductCard
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            image={pastaImg}
            infos={['Italiana']}
            rating={4.6}
          />
        </List>
      </Container>
      <Footer />
    </>
  )
}

export default Home
