import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from '../layout/layout'
import HomePage from '../pages/Home'
import AboutPage from '../pages/About'
import ServicesPage from '../pages/Services'
import CareerPage from '../pages/Carrers'
import ContactPage from '../pages/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="carrer" element={<CareerPage />} />
      <Route path="contact" element={<ContactPage />} />
    </Route>,
  ),
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
