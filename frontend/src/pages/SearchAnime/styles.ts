import styled from 'styled-components'

export const SearchAnimeWrapper = styled.main`
  padding-top: calc(3.6rem + var(--navbar-height));
`

export const SearchResultsWrapper = styled.section`
  margin-top: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .loading-stuff {
    margin-top: 5rem;
  }
  .title {
    font-family: 'Rubik', sans-serif;
    font-size: 1.8rem;
    line-height: 21.33px;
    color: var(--white);
    margin-right: auto;
  }
  .not-found-container {
    margin-top: 5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    .not-found-message {
      font-family: 'Rubik', sans-serif;
      font-size: 1.3rem;
      line-height: 21.33px;
      color: var(--white);
      margin-right: auto;
    }
  }

  .grid {
    margin-top: 2.8rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.755rem 2.4rem;
  }
`
