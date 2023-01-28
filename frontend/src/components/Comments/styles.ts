import styled from 'styled-components'

export const CommentsWrapper = styled.section`
  margin-top: 3.2rem;

  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  strong {
    margin-bottom: 1.7rem;

    font-family: 'Rubik', sans-serif;
    font-size: 1.6rem;
    line-height: 19px;
    color: ${({ theme }) => theme.titleColor};
  }

  .commentary-form {
    width: 100%;
    padding: 1.5rem;
    background-color: ${({ theme }) => theme.buttonBackgroundColor};

    border-radius: 1.2rem;

    label {
      padding: 1rem;

      font-family: 'Rubik', sans-serif;
      font-size: 1.6rem;
      line-height: 19px;
      color: ${({ theme }) => theme.titleColor};
    }

    input {
      width: 100%;
      margin-bottom: 2rem;
      margin-top: 1rem;
      padding: 1.5rem;

      border: none;
      outline: none;

      background-color: ${({ theme }) => theme.backgroundColor};
      color: ${({ theme }) => theme.titleColor};

      font-family: 'Rubik', sans-serif;
      font-size: 1.2rem;
      line-height: 1.42rem;
    }

    textarea {
      width: 100%;
      border: none;
      overflow: auto;
      outline: none;
      resize: none;

      margin-top: 1rem;
      padding: 1.5rem;

      background-color: ${({ theme }) => theme.backgroundColor};
      color: ${({ theme }) => theme.titleColor};

      font-family: 'Rubik', sans-serif;
      font-size: 1.2rem;
      line-height: 1.42rem;
    }

    textarea:focus {
    }
  }

  #comment-button {
    margin-inline: auto;

    display: block;
    width: 100%;

    margin-top: 2rem;
    padding-block: 0.4rem;
    background: ${({ theme }) => theme.backgroundColor};
    border: none;
    border-radius: 0.4rem;

    line-height: 32px;
    color: ${({ theme }) => theme.titleColor};
    font-size: 1.4rem;
    font-weight: 500;
    font-family: 'Inter', sans-serif;

    text-align: center;

    cursor: pointer;
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

  @media (min-width: 540px) {
    #comment-button {
      max-width: 12rem;
    }
  }

  @media (min-width: 980px) {
    strong {
      font-size: 2.4rem;
      line-height: 2.4rem;
    }

    .commentary-form {
      label {
        font-size: 1.8rem;
      }

      input {
        font-size: 1.5rem;
        line-height: 2.2rem;
      }

      textarea {
        font-size: 1.75rem;
        line-height: 2.4rem;
      }
    }

    article {
      gap: 2rem;

      img {
        width: 6.2rem;
        height: 6.2rem;
      }

      #commentary {
        p {
          font-size: 1.75rem;
          line-height: 2.4rem;
        }
        span {
          font-size: 1.6rem;
          line-height: 2.2rem;
        }
      }
    }
  }

  @media (min-width: 1920px) {
    strong {
      font-size: 3.2rem;
      line-height: 3.2rem;
    }

    .commentary-form {
      label {
        font-size: 2rem;
      }

      input {
        font-size: 1.8rem;
        line-height: 3rem;
      }

      textarea {
        font-size: 2rem;
        line-height: 3.2rem;
      }
    }

    article {
      #commentary {
        p {
          font-size: 2rem;
          line-height: 3.2rem;
        }
        span {
          font-size: 1.8rem;
          line-height: 2.8rem;
        }
      }
    }
  }
`
