import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Formulario from './pages/Formulario'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/novo',
    element: <Formulario />,
  },
  {
    path: '/editar/:id',
    element: <Formulario />,
  },
])