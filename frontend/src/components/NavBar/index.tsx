
import * as S from './styles'
import { useState, useEffect } from 'react';
import { List, MagnifyingGlass, X } from 'phosphor-react'
import { Link } from "react-router-dom";

export default function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(prevState => !prevState)
  }

  function toggleSearch() {
    setIsSearchOpen(prevState => !prevState)
  }

  //Callback and useEffect to check if the scroll is going up or down
  let lastScrollTop = 0;

  function HandleScrollTop() {
    let offset = window.pageYOffset || document.documentElement.scrollTop;
    let offsetY = window.pageYOffset

    if (offset < lastScrollTop && offsetY > 101) {
      setIsScrollingUp(true);
      setIsMenuOpen(false);
      setIsSearchOpen(false);
    }
    else if (offset > lastScrollTop && offsetY > 101) {
      setIsScrollingUp(false);
    }
    else {
      setIsScrollingUp(false);
    }
    //Store the offset on the variable so in the next check it will be
    //the new scroll offset comparing to the last scroll top
    lastScrollTop = offset <= 0 ? 0 : offset;
  }

  useEffect(() => {
    const scrollbarListener: any = window.addEventListener("scroll", HandleScrollTop, false)
    return () => {
      window.removeEventListener("scroll", scrollbarListener)
    }
  }, [])

  return (
    <S.NavBarWrapper
      isMenuOpen={isMenuOpen}
      isSearchOpen={isSearchOpen}
      isScrollingUp={isScrollingUp}
    >
      <header>
        <a id="logo" href="/">
          Ani.me
        </a>
        <div className="icons">
          <MagnifyingGlass className="cursor-change" size={24} color="#ffffff" onClick={toggleSearch} />
          {isMenuOpen ?
            <X className="cursor-change" size={24} color="#ffffff" onClick={toggleMenu} />
            :
            <List size={24} color="#ffffff" className="menu-icon cursor-change" onClick={toggleMenu} />
          }
        </div>
      </header>
      <form id="search-bar" action="">
        <input type="text" placeholder="Buscar" />
      </form>
      <menu>
        {/* To do: quando terminar as páginas trocar os a pra link */}
        <Link to="/">Início</Link>
        <a href="">Lista</a>
        <a href="">Gêneros</a>
        <a href="">Novos episódios</a>
      </menu>
    </S.NavBarWrapper>
  )
}