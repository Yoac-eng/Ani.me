import styled from 'styled-components'

export const PlayerBoxWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.3rem;

  h1 {
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 19px;
    color: ${({ theme }) => theme.titleColor};
  }

  .player-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .desc {
      font-family: 'Inter', sans-serif;
      font-size: 1.2rem;
      line-height: 15px;
      color: ${({ theme }) => theme.secondaryTextColor};

      display: flex;
      flex-direction: column;
      gap: 2rem;

      .desc-item {
        font-family: 'Rubik', sans-serif;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 17px;
        color: ${({ theme }) => theme.titleColor};
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        li {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }
      }

      p {
        line-height: 19px;
        letter-spacing: 0.07em;

        display: flex;
        flex-direction: column;
        gap: 0.8rem;
      }

      p .viewMore-link {
        color: ${({ theme }) => theme.titleColor};
      }
    }
  }
`
