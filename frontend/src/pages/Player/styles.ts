import styled from 'styled-components'

export const PlayerWrapper = styled.div`
  padding-top: calc(5.4rem + var(--navbar-height));
`

export const Related = styled.section`
  margin-top: 4rem;

  strong {
    font-family: 'Rubik', sans-serif;
    font-size: 1.6rem;
    line-height: 19px;
    color: ${({ theme }) => theme.titleColor};
  }

  .grid {
    margin-top: 2.8rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.755rem 2.4rem;
  }
`
