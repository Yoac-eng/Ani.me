import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

export function DefaultLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}
