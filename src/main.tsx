import React from 'react'
import ReactDOM from 'react-dom/client'

import { queryClient } from '@/lib/react-query.ts'
import { QueryClientProvider } from '@tanstack/react-query'

import { App } from './App.tsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
