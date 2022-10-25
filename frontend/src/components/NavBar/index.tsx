import * as S from './styles'
import { useState, useEffect } from 'react'
import { List, MagnifyingGlass, X } from 'phosphor-react'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrollingUp, setIsScrollingUp] = useState(false)
  const [navIconsDisplay, setNavIconsDisplay] = useState(true)

  // Check which page the navbar is on and display or not the icons
  const RouteLocation = useLocation()
  useEffect(() => {
    if (
      RouteLocation.pathname === '/login' ||
      RouteLocation.pathname === '/register'
    ) {
      setNavIconsDisplay(false)
    } else {
      setNavIconsDisplay(true)
    }
  }, [RouteLocation.pathname])

  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState)
    if (isSearchOpen === true) {
      setIsSearchOpen(false)
    }
  }

  function toggleSearch() {
    setIsSearchOpen((prevState) => !prevState)
  }

  // Callback and useEffect to check if the scroll is going up or down
  let lastScrollTop = 0

  function HandleScrollTop() {
    const offset = window.pageYOffset || document.documentElement.scrollTop
    const offsetY = window.pageYOffset

    if (offset < lastScrollTop && offsetY > 101) {
      setIsScrollingUp(true)
      setIsMenuOpen(false)
      setIsSearchOpen(false)
    } else if (offset > lastScrollTop && offsetY > 101) {
      setIsScrollingUp(false)
    } else {
      setIsScrollingUp(false)
    }
    // Store the offset on the variable so in the next check it will be
    // the new scroll offset comparing to the last scroll top
    lastScrollTop = offset <= 0 ? 0 : offset
  }

  useEffect(() => {
    const scrollbarListener: any = window.addEventListener(
      'scroll',
      HandleScrollTop,
      false,
    )
    return () => {
      window.removeEventListener('scroll', scrollbarListener)
    }
  }, [])// eslint-disable-line

  return (
    <S.NavBarWrapper
      isMenuOpen={isMenuOpen}
      isSearchOpen={isSearchOpen}
      isScrollingUp={isScrollingUp}
    >
      <header>
        <Link id="logo" to="/">
          Ani.me
        </Link>
        {
          // Check if the icons should be displayed or not depending on which page is beeing rendered
          navIconsDisplay ? (
            <div className="icons">
              <MagnifyingGlass
                className="cursor-change"
                size={24}
                color="#ffffff"
                onClick={toggleSearch}
              />
              {isMenuOpen ? (
                <X
                  className="cursor-change"
                  size={24}
                  color="#ffffff"
                  onClick={toggleMenu}
                />
              ) : (
                <List
                  size={24}
                  color="#ffffff"
                  className="menu-icon cursor-change"
                  onClick={toggleMenu}
                />
              )}
            </div>
          ) : (
            ''
          )
        }
      </header>
      <form id="search-bar" action="">
        <input type="text" placeholder="Buscar" />
      </form>
      <menu>
        <Link onClick={toggleMenu} to="/">
          Início
        </Link>
        <Link onClick={toggleMenu} to="/login">
          Login
        </Link>
        <Link onClick={toggleMenu} to="/">
          Lista
        </Link>
        <Link onClick={toggleMenu} to="/">
          Gêneros
        </Link>
        <Link onClick={toggleMenu} to="/">
          Novos episódios
        </Link>
      </menu>
    </S.NavBarWrapper>
  )
}
