
import * as S from './styles'
import {List, MagnifyingGlass} from 'phosphor-react'
import { useState } from 'react';

export default function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  function toggleMenu(){
    setIsMenuOpen(prevState => !prevState)
  }
  
  return (
    <>
        <S.NavBarWrapper>
            <a className="logo" href="/">
              Ani.me
            </a>
            <div className="icons">
              <MagnifyingGlass size={24} color="#ffffff" />
              <List size={24} color="#ffffff" className="menu-icon" onClick={toggleMenu}/>
            </div>
        </S.NavBarWrapper>
        
      </>
    )
}