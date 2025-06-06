import { BrowserRouter } from 'react-router-dom'
import Footer from './container/Footer'
import EstiloGlobal from './styles'
import Rotas from './routes'
import reportWebVitals from './reportWebVitals' // Importação corrigida

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App

// Chamada para coletar dados de performance
reportWebVitals()
