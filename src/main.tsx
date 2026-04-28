import { createRoot } from 'react-dom/client'
import {RouterProvider} from 'react-router'
import { router } from './app/router/router'
import './index.css'
import AppProvider from './app/context/app-provider'

createRoot(document.getElementById('root')!).render(
  <AppProvider><RouterProvider router={router} /></AppProvider>
)
