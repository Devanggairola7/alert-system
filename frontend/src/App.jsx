import { useEffect, useState } from 'react'
import Homepage from './homepage/homepage.jsx'
import Aboutus from './aboutus/aboutus.jsx'
import Dashboard from './dashboard/dashboard.jsx'
import Signup from './signup/signup.jsx'
import Login from './login/login.jsx'

function CurrentPage({ path }) {
  switch (path) {
    case '/about':
      return <Aboutus />
    case '/dashboard':
      return <Dashboard />
    case '/signup':
      return <Signup />
    case '/login':
      return <Login />
    default:
      return <Homepage />
  }
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    function handlePopState() {
      setPath(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return (
    <div>
      <CurrentPage path={path} />
    </div>
  )
}