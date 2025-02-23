import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import './index.css'
import ScrollToSection from './components/ScrollToSection.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
