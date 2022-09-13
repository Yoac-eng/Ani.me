import styled from "styled-components";

export const CommentsWrapper = styled.section`
  margin-top: 3.2rem;

  display: flex;
  flex-direction: column;
  
  strong {
    margin-bottom: 1.7rem;

    font-family: 'Rubik', sans-serif;
    font-size: 1.6rem;
    line-height: 19px;
    color: var(--white);
  }
  
  article{
    padding-top: 2rem;
    padding-bottom: 1.5rem;

    display: flex;
    align-items: flex-start;
    
    gap: 1rem;
      
      img{
        width: 40px;
        height: 40px;
        border-radius: 100%;
      }

      #commentary{
        display: flex;
        flex-direction: column;
        gap: 0.9rem;

          p{
            font-family: 'Rubik', sans-serif;
            font-weight: 500;
            font-size: 1.2rem;
            line-height: 1.42rem;
          }
          span{
            font-family: 'Inter', sans-serif;
            font-size: 1.2rem;
            line-height: 1.7rem;
            color: var(--gray);

            word-break: break-all;
          }
      }
  }
    
  .button {
    display: block;

    margin-top: 2.5rem;
    padding-block: .4rem;
    background: var(--secondary-color);
    border-radius: 4px;

    line-height: 32px;
    color: var(--white);
    font-size: 1.6rem;
    font-weight: 500;
    font-family: "Inter", sans-serif;

    text-align: center;
  }

  //This style will be rendered for articles that come after an article
  article + article {
    border-top: 2px solid var(--secondary-color);
  }

`