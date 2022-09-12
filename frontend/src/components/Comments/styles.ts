import styled from "styled-components";

export const CommentsWrapper = styled.section`
  margin-top: 3.2rem;

  display: flex;
  flex-direction: column;
  //Talvez mudar esse gap?
  gap: 4rem;
  
  strong {
    font-family: 'Rubik', sans-serif;
    font-size: 1.6rem;
    line-height: 19px;
    color: var(--white);
  }
  
  article{
    display: flex;
    align-items: center;
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
          }
      }
  }
  
    
  .button {
    display: block;

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

`