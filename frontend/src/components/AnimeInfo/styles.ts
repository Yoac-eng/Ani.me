import styled from 'styled-components'

export const AnimeInfoWrapper = styled.section`
  margin-bottom: 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 2rem;
    line-height: 19px;
    color: ${({ theme }) => theme.titleColor};
  }
  span {
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    line-height: 1.7rem;
    color: ${({ theme }) => theme.secondaryTextColor};

    word-break: break-all;
  }

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

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;

      padding-block: 0.4rem;
      background: var(--primary-color);

      line-height: 32px;
      color: var(--white);
      font-size: 1.4rem;
      font-weight: 500;
      font-family: 'Inter', sans-serif;

      text-align: center;
    }

    .button:hover {
      transition: 0.3s;
      background-color: var(--secondary-color);
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
`
