import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Product from './Components/Product/Product'
import MakeUp from './Components/MakeUp/MakeUp'
import Cosmetik from './Components/Cosmetik/Cosmetik'

let x = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <MakeUp /> },
      { path: "home", element: <Home /> },
      { path: "product", element: <Product /> },
      { path: "cosmetik", element: <Cosmetik /> }

    ]
  }
],{
  basename:'MakeUp-Project'
})


function App() {


  return (
    <>
      <RouterProvider router={x} ></RouterProvider>
    </>
  )
}

export default App
