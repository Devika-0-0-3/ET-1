import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route,RouterProvider} from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './components/Profile'


const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/:id' element={<Profile />}  />
        <Route path='about' element={<About />} />
  
      </Route>

    )
  )






  return (
    <RouterProvider router={router}/>
  )
}

export default App
