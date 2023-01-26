import styled from 'styled-components'

export const PaginationWrapper = styled.ul`
  margin-top: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1.5rem;

  font-size: 1.4rem;
  font-family: 'Rubik', sans-serif;

  color: ${({ theme }) => theme.titleColor};

  li {
    cursor: pointer;
  }

  button {
    background-color: transparent;
    border: none;

    cursor: pointer;
  }

  .current-page {
    color: var(--primary-color);
  }
`
