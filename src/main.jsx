import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './components/Main.jsx'
import Artista from './components/Artista.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {index:true, element:<Main/>},
      {path: '/artistas/:id', element: <Artista/>},
      {path : '*', element: <h1>PageNotFound</h1>}
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
