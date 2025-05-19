import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Banner, Container, List, Title } from './styles'
import ProductCard from '../../components/ProductCard'
import pizzaImg from '../../assets/images/pizza.png'
import React from 'react'

const Product = () => {
  return (
    <>
      <Header />
      <Banner style={{ backgroundImage: `url(${pizzaImg})` }}>
        <div className="container">
          <Title>La Dolce Vita Trattoria</Title>
        </div>
      </Banner>
      <Container className="container">
        <List>
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductCard
              key={index}
              title="Pizza Marguerita"
              description="A clássica pizza de marguerita coberta com molho de tomate artesanal, mussarela de búfala, tomate cereja e folhas frescas de manjericão. Massa leve, borda crocante e sabor inconfundível."
              image={pizzaImg}
              infos={[]}
              rating={0}
            />
          ))}
        </List>
      </Container>
      <Footer />
    </>
  )
}

export default Product
