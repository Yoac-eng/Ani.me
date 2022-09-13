import styled from "styled-components";

export const Form = styled.form`
  margin-top: 8rem;
  padding: 1.5rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Rubik', sans-serif;
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 3rem;
    color: var(--white);

    margin-bottom: 3rem;
  }

  .form-inputs{
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    input {
      padding: 1rem 0.5rem 1.5rem 0.5rem;
      
      letter-spacing: 0.07rem;
      color: var(--white);
      font-weight: 500;
      font-size: 1.4rem;
      font-family: 'Inter', sans-serif;
      
      outline: none;
      border: none;
      border-bottom: 1px solid var(--gray);

      background-color: var(--dark-color);
    }
  }

  button{
    display: block;
    width: 100%;

    margin-top: 3.2rem;
    padding-block: .4rem;
    background: var(--primary-color);
    border: none;

    line-height: 32px;
    color: var(--white);
    font-size: 1.4rem;
    font-weight: 500;
    font-family: "Inter", sans-serif;

    text-align: center;
    
    cursor: pointer;
  }
`

export const AccountInfo = styled.div`
  margin-top: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 3.5rem;

  text-align: center;
  font-family: "Inter", sans-serif;
  color: var(--gray);

  .agreement-info{
    font-weight: 400;
    font-size: 1.1rem;

    a{
      color: var(--white);
    }
    a:hover{
      border-bottom: 1px solid var(--white);
    }
  }
  
  .login-info{
    color: var(--white);
    font-weight: 400;
    font-size: 1.4rem;

    a{
      color: var(--primary-color);
    }
    a:hover{
      border-bottom: 1px solid var(--primary-color);
    }
  }

`
