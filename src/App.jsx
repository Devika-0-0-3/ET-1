import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route,RouterProvider} from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Profile ,{profileDetailsLoader}from './components/Profile'


const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>

  {/* Index route (Home page) */}
  <Route index element={<Home />} />

  {/* Dynamic route for Profile */}
  <Route path='/:id' element={<Profile />} loader={profileDetailsLoader} />

  {/* Static route for About page */}
  <Route path='about' element={<About />} />
  
</Route>

    )
  )






  return (
    <RouterProvider router={router}/>
  )
}

export default App
