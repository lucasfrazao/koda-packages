import { createBrowserRouter } from 'react-router-dom'

import { LayoutHome } from '@/layouts/home'

import { NotFound } from '@/pages/404'
import { Home } from '@/pages/Home'
import { Error } from '@/pages/error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutHome />,
    errorElement: <Error />,
    children: [{ path: '/', element: <Home /> }],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
