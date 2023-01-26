import * as S from './styles'
import React, { useState, useEffect } from 'react'
import { CaretDown, List, MagnifyingGlass, X } from 'phosphor-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ThemeButton } from '../ThemeButton'
import { useTheme } from 'styled-components'

interface NavBarProps {
  toggleTheme(): void
}

interface ThemeType {
  iconColor: string
}

export default function NavBar({ toggleTheme }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrollingUp, setIsScrollingUp] = useState(false)
  const [navIconsDisplay, setNavIconsDisplay] = useState(true)
  const [searchInput, setSearchInput] = useState('')

  // Get theme from theme provider
  const theme = useTheme() as ThemeType

  const navigate = useNavigate()

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

  // Handle Input change and change the state
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(event.target.value)
  }

  // Handle form submit to preventDefault behavior
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
  }

  // Handle user enter key press
  function handleEnterKeyPress(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  // Handle the user search action itself
  function handleSearch() {
    if (searchInput !== '') {
      navigate(`/search?q=${searchInput}&page=${1}`)
    }
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
        <ThemeButton toggleTheme={toggleTheme} />
        {
          // Check if the icons should be displayed or not depending on which page is beeing rendered
          navIconsDisplay && (
            <div className="icons">
              {isSearchOpen ? (
                <CaretDown
                  className="cursor-change"
                  size={24}
                  color={`${theme.iconColor}`}
                  onClick={toggleSearch}
                />
              ) : (
                <MagnifyingGlass
                  className="cursor-change"
                  size={24}
                  color={`${theme.iconColor}`}
                  onClick={toggleSearch}
                />
              )}
              {isMenuOpen ? (
                <X
                  className="cursor-change"
                  size={24}
                  color={`${theme.iconColor}`}
                  onClick={toggleMenu}
                />
              ) : (
                <List
                  size={24}
                  color={`${theme.iconColor}`}
                  className="menu-icon cursor-change"
                  onClick={toggleMenu}
                />
              )}
            </div>
          )
        }
      </header>
      {/* search input and menu mobile version */}
      <form id="mobile-search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchInput}
          placeholder="Buscar animes"
          onChange={handleChange}
          onKeyDown={handleEnterKeyPress}
        />
        <button onClick={handleSearch}>
          <MagnifyingGlass
            className="cursor-change"
            size={24}
            color="#ffffff"
          />
        </button>
      </form>
      <menu id="mobile-menu">
        <Link onClick={toggleMenu} to="/">
          Início
        </Link>
        <Link onClick={toggleMenu} to={`/anime/random`}>
          Anime aleatório
        </Link>
        <Link onClick={toggleMenu} to="/login">
          Login
        </Link>
        <Link onClick={toggleMenu} to="/register">
          Criar conta
        </Link>
      </menu>
      {/* desktop menu and input search */}
      <menu id="desktop-menu">
        <Link to="/">Início</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Criar conta</Link>
        <Link to={`/anime/random`}>Anime aleatório</Link>
        <form id="search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchInput}
            placeholder="Buscar animes"
            onChange={handleChange}
            onKeyDown={handleEnterKeyPress}
          />
        </form>
      </menu>
    </S.NavBarWrapper>
  )
}
