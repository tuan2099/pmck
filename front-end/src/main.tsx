import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from '@material-tailwind/react'

import App from './App.tsx'
import { AppProvider } from './context/app.context.tsx'

import 'react-toastify/dist/ReactToastify.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <ToastContainer />
            <App />
          </AppProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
