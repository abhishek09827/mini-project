import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AuthenticationPage from './components/Authentication/Authentication.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Header from './components/Header/Header.jsx'
import MailPage from './components/mail/page.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='auth' element={<AuthenticationPage/>} />
      <Route path='analysis' element={<MailPage/>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
