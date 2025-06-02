import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../container/Header'

import { Lista, RestauranteCard } from './styles'

type RestauranteAPI = {
  id: number
  titulo: string
  tipo: string
  capa: string
  avaliacao: number
}

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
