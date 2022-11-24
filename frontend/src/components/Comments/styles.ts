import styled from 'styled-components'

export const CommentsWrapper = styled.section`
  margin-top: 3.2rem;

  display: flex;
  flex-direction: column;

  strong {
    margin-bottom: 1.7rem;

    font-family: 'Rubik', sans-serif;
    font-size: 1.6rem;
    line-height: 19px;
    color: ${({ theme }) => theme.titleColor};
  }

  article {
    padding-top: 2rem;
    padding-bottom: 1.5rem;

    display: flex;
    align-items: flex-start;

    gap: 1rem;

    img {
      width: 40px;
      height: 40px;
      border-radius: 100%;
    }

    #commentary {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;

      p {
        color: ${({ theme }) => theme.titleColor};

        font-family: 'Rubik', sans-serif;
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 1.42rem;
      }
      span {
        font-family: 'Inter', sans-serif;
        font-size: 1.2rem;
        line-height: 1.7rem;
        color: ${({ theme }) => theme.secondaryTextColor};

        word-break: break-all;
      }
    }
  }

  //This style will be rendered for articles that come after an article
  article + article {
    border-top: 2px solid var(--secondary-color);
  }
`
