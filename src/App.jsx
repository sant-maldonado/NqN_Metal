import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Topbar from './components/Topbar'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'

function App() {
  return (
    <BrowserRouter>
      <div className="landing-shell">
        <Topbar />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" replace />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<Navigate to="/inicio" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
