import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import AboutUs from './components/about-us/AboutUs.jsx'
import ContactUs from './components/contact-us/ContactUs.jsx'
import App from './App.jsx'
import './index.css'
import LogIn from './components/login/LogIn.jsx'
import SignUp from './components/signup/SignUp.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<AboutUs />} />
      <Route path='contact' element={<ContactUs />} />
      <Route path='login' element={<LogIn/>} />
      <Route path='signup' element={<SignUp/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
