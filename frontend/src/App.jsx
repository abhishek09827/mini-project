
import DashboardPage from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import AuthenticationPage from './components/Authentication/Authentication'
import { Outlet } from 'react-router-dom'
import MailPage from './components/mail/page'
function App() {

  return (
    <>
      <Outlet />
      {/* <MailPage /> */}
    </>
  )
}

export default App
