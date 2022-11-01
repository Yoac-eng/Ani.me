import styled from 'styled-components'

export const SearchAnimeWrapper = styled.main`
  padding-top: calc(3.6rem + var(--navbar-height));
`

export const SearchResultsWrapper = styled.section`
  margin-top: 4.8rem;
  .title {
    font-family: 'Rubik', sans-serif;
    font-size: 1.8rem;
    line-height: 21.33px;
    color: var(--white);
  }
  .grid {
    margin-top: 2.8rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.755rem 2.4rem;
  }
`
