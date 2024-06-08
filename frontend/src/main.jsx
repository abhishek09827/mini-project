import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AuthenticationPage from './components/Authentication/Authentication.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Header from './components/Header/Header.jsx'
import MailPage from './components/mail/page.jsx'
import { accounts } from './components/mail/data.jsx'
import { Analysis } from './components/mail/components/analytics.jsx'
import Layout from './Layout.jsx'
import LoginPage from './components/Authentication/Login.jsx'
import VideoUpload from './Video/VideoForm.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<AuthenticationPage />} />
    <Route path='login' element={<LoginPage />} />
    <Route path='user' element={<App />}>
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='analysis' element={<MailPage/>} />
      <Route path='video' element={<VideoUpload />} />
    </Route>
    
    </Route>
    
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
