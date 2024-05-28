import { createBrowserRouter } from 'react-router-dom'

import { LayoutApp } from '@/layouts/app'
import { LayoutHome } from '@/layouts/home'

import { NotFound } from '@/pages/404'
import { Home } from '@/pages/Home'
import { Package } from '@/pages/Package'
import { Error } from '@/pages/error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutHome />,
    errorElement: <Error />,
    children: [{ path: '/', element: <Home /> }],
  },
  {
    path: '/',
    element: <LayoutApp />,
    errorElement: <Error />,
    children: [{ path: '/detail-package', element: <Package /> }],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
