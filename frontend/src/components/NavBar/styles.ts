import styled from "styled-components";

export const NavBarWrapper = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .logo{
      margin-right: auto;

      font-family: 'Rubik', sans-serif;
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 3.2rem;
      color: var(--primary-color);
    }

    .icons{
      display: flex;
      gap: 3.2rem;
    }
`