import React from 'react'
import ReactDOM from 'react-dom/client'

import 'swiper/css'

import 'swiper/css/pagination'

import 'swiper/css/navigation'

import 'swiper/css/autoplay'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppProvider } from './context/app.context.tsx'
import App from './App.tsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <ToastContainer />
          <App />
        </AppProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
