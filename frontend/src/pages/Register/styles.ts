import styled from 'styled-components'

export const RegisterWrapper = styled.div`
  padding-top: 8rem;

  display: flex;
  justify-content: center;
`

export const Form = styled.form`
  padding: 1.5rem 0;
  width: 100%;
  max-width: 40rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Rubik', sans-serif;
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 3rem;
    color: ${({ theme }) => theme.titleColor};

    margin-bottom: 3rem;
  }

  .form-inputs {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    input {
      padding: 1rem 0.5rem 1.5rem 0.5rem;

      letter-spacing: 0.07rem;
      color: ${({ theme }) => theme.titleColor};
      font-weight: 500;
      font-size: 1.4rem;
      font-family: 'Inter', sans-serif;

      outline: none;
      border: none;
      border-bottom: 1px solid var(--gray);

      background-color: ${({ theme }) => theme.backgroundColor};
    }
  }

  button {
    display: block;
    width: 100%;

    margin-top: 3.2rem;
    padding-block: 0.4rem;
    background: var(--primary-color);
    border: none;
    border-radius: 0.4rem;

    line-height: 32px;
    color: var(--white);
    font-size: 1.4rem;
    font-weight: 500;
    font-family: 'Inter', sans-serif;

    text-align: center;

    cursor: pointer;
  }

  @media (min-width: 540px) {
    button {
      max-width: 12rem;
    }
  }
`

export const AccountInfo = styled.div`
  margin-top: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 3.5rem;

  text-align: center;
  font-family: 'Inter', sans-serif;
  color: ${({ theme }) => theme.secondaryTextColor};

  .agreement-info {
    font-weight: 400;
    font-size: 1.1rem;

    a {
      color: ${({ theme }) => theme.titleColor};
    }
    a:hover {
      border-bottom: 1px solid ${({ theme }) => theme.secondaryTextColor};
    }
  }

  .login-info {
    color: ${({ theme }) => theme.titleColor};
    font-weight: 400;
    font-size: 1.4rem;

    a {
      color: var(--primary-color);
    }
    a:hover {
      border-bottom: 1px solid var(--primary-color);
    }
  }
`
