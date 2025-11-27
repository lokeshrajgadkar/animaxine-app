import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import TopAnimeList from './components/TopAnimeList'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
// import { router } from './Routes/Router';

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
// declare module '@tanstack/react-router' {
//   interface Register {
//     router: typeof router
//   }
// }

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

