import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BerriesPage, HomePage, NotFoundPage, PokemonsPage } from '../pages/pages.export'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/berries',
        element: <BerriesPage />
    },
    {
        path: '/pokemons',
        element: <PokemonsPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])

const AppRouter: React.FC = () => {
    return <RouterProvider router={router} />
}

export default AppRouter