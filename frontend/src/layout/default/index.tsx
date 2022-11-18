import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

interface DefaultLayoutProps {
  toggleTheme(): void
}

export function DefaultLayout({ toggleTheme }: DefaultLayoutProps) {
  return (
    <>
      <NavBar toggleTheme={toggleTheme} />
      <Outlet />
      <Footer />
    </>
  )
}
