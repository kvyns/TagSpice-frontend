import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import SignupPage from './pages/SignupPage/SignupPage.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import Dashboard from './pages/Dashboard/Dashboard.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout/>}>
      <Route path = "" element = {<LandingPage/>}/>
      <Route path = "signin" element = {<LoginPage/>}/>
      <Route path = "signup" element = {<SignupPage/>}/>
      <Route path = "dashboard" element = {<Dashboard/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
