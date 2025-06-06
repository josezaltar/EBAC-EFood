import { BrowserRouter } from 'react-router-dom'
import Footer from './container/Footer'
import EstiloGlobal from './styles'
import Rotas from './routes'

// Importando o pacote para ativar o Analytics automaticamente
import '@vercel/analytics' // Importação simples do pacote

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
