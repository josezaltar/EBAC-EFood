import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Header from '../../container/Header'

type RestauranteAPI = {
  id: number
  titulo: string
  tipo: string
  capa: string
  avaliacao: number
}

const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  list-style: none;
  padding: 40px 0;
`

const RestauranteCard = styled.li`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  div {
    padding: 16px;
  }

  h2 {
    font-size: 20px;
    margin: 0 0 8px 0;
  }

  p {
    margin: 0;
    color: #666;
  }

  span {
    display: block;
    margin-top: 8px;
    font-weight: bold;
  }
`

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<RestauranteAPI[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setRestaurantes(data))
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <Lista>
          {restaurantes.map((restaurante) => (
            <RestauranteCard key={restaurante.id}>
              <Link to={`/restaurantes?${restaurante.id}`}>
                <img src={restaurante.capa} alt={restaurante.titulo} />
                <div>
                  <h2>{restaurante.titulo}</h2>
                  <p>{restaurante.tipo}</p>
                  <span>⭐ {restaurante.avaliacao}</span>
                </div>
              </Link>
            </RestauranteCard>
          ))}
        </Lista>
      </div>
    </>
  )
}

export default Home
