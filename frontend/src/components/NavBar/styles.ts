import styled, { css } from 'styled-components'

type NavBarProps = {
  isMenuOpen: boolean
  isSearchOpen: boolean
  isScrollingUp: boolean
}

export const NavBarWrapper = styled.nav<NavBarProps>`
  //Create fade-in animation
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-inline: var(--wrapper-padding);
  padding-top: var(--wrapper-padding);
  padding-bottom: 1rem;

  z-index: 90;
  background-color: ${({ theme }) => theme.backgroundColor};

  ${({ isScrollingUp }) =>
    isScrollingUp &&
    css`
      position: fixed;
      animation: fade-in 500ms forwards;
    `}
  header {
    display: flex;
    align-items: center;
  }

  #logo {
    margin-right: auto;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: var(--primary-color);
  }

  .icons {
    display: flex;
    gap: 3.2rem;
  }

  .cursor-change {
    cursor: pointer;
  }

  menu {
    display: none;
  }

  //Check the menu state for mobile menu toggle
  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      menu {
        position: absolute;
        left: 0;
        right: 0;

        z-index: 90;

        //Using fade-in animation
        animation: fade-in 500ms forwards;

        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 0.5rem;

        background-color: var(--dark-color);
      }

      menu a {
        font-family: 'Rubik', sans-serif;
        font-size: 1.4rem;
        line-height: 3rem;
        color: var(--white);
      }

      menu a:hover {
        transition: 0.3s;

        color: var(--primary-color);
      }
    `}

  #search-bar {
    display: none;
  }

  //Check the search input state for mobile search toggle
  ${({ isSearchOpen }) =>
    isSearchOpen &&
    css`
      #search-bar {
        margin-top: 0.5rem;
        margin-bottom: 0.3rem;
        height: 3rem;

        animation: fade-in 500ms forwards;

        display: flex;
        flex-direction: row;
        justify-content: center;
      }

      #search-bar input {
        width: 100%;
        padding-left: 1.5rem;

        letter-spacing: 0.07rem;
        color: var(--white);
        font-weight: 500;
        font-size: 1.4rem;
        font-family: 'Inter', sans-serif;

        border: 1px solid var(--secondary-color);
        border-radius: 3.7rem 0 0 3.7rem;

        background-color: var(--secondary-color);

        outline: none;
      }
      #search-bar button {
        padding: 0 1.2rem 0 1rem;

        background-color: var(--primary-color);
        border: 1px solid var(--black);

        border-radius: 0 3.7rem 3.7rem 0;
      }
    `}
`
