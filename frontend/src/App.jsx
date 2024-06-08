
import DashboardPage from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import AuthenticationPage from './components/Authentication/Authentication'
import { Outlet } from 'react-router-dom'
import MailPage from './components/mail/page'
import { Analysis } from './components/mail/components/analytics'
import { accounts } from './components/mail/data'
import { Footer } from 'react-day-picker'
import VideoUpload from './Video/VideoForm'
function App() {

  return (
    <>
    <Header />
      <Outlet />
      
    </>
  )
}

export default App
