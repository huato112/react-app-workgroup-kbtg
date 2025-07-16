import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DefaultLayout } from '@/components/layouts/default-layout'
import { HomePage } from '@/pages/home-page'
import { UserListPage } from '@/features/users/pages/user-list-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'users',
        element: <UserListPage />,
      },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
