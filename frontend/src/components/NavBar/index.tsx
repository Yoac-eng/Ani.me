
import * as S from './styles'
import {List, MagnifyingGlass, X} from 'phosphor-react'
import { useState, useEffect } from 'react';

export default function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  function toggleMenu(){
    setIsMenuOpen(prevState => !prevState)
  }

  function toggleSearch(){
    setIsSearchOpen(prevState => !prevState)
  }

  //Callback and useEffect to check if the scroll is going up or down
  let lastScrollTop = 0;

  function test (){
    let offset = window.pageYOffset || document.documentElement.scrollTop;
    let offsetY = window.pageYOffset
    if((offset < lastScrollTop && offsetY > 101) ){
      setIsScrollingUp(true);
      setIsMenuOpen(false);
      setIsSearchOpen(false);
    }
    else if (offset > lastScrollTop && offsetY > 101){
      setIsScrollingUp(false);
    }
    else{
      setIsScrollingUp(false);
    }
    //Store the offset on the variable so in the next check if will be
    //the new scroll offset comparing to the kast scroll top
    lastScrollTop = offset <= 0 ? 0 : offset;
  }
  
  useEffect(() => {
    const scrollbarListener:any = window.addEventListener("scroll", test, false)
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
              <MagnifyingGlass className="cursor-change" size={24} color="#ffffff" onClick={toggleSearch}/>
              {isMenuOpen ?
              <X className="cursor-change" size={24} color="#ffffff" onClick={toggleMenu}/>
              :
              <List size={24} color="#ffffff" className="menu-icon cursor-change" onClick={toggleMenu}/>
              }
            </div>
          </header>
          <form id="search-bar" action="">
           <input type="text" placeholder="Buscar"/>
          </form>
          <menu>
            <a href="/">Início</a>
            <a href="">Lista</a>
            <a href="">Gêneros</a>
            <a href="">Novos episódios</a>
          </menu>
        </S.NavBarWrapper>
    )
}