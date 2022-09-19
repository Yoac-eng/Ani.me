import styled from "styled-components";

export const AnimeInfoWrapper = styled.section`
  
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h1 {
        font-family: 'Rubik', sans-serif;
        font-weight: 500;
        font-size: 2rem;
        line-height: 19px;
        color: #FFFFFF;
    }
    span{
      font-family: 'Inter', sans-serif;
      font-size: 1.2rem;
      line-height: 1.7rem;
      color: var(--gray);

      word-break: break-all;
    }

    .desc {
        font-family: 'Inter', sans-serif;
        font-size: 1.2rem;
        line-height: 15px;
        color: #BFBFBF;

        display: flex;
        flex-direction: column;
        gap: 2rem;

        .desc-item {
            font-family: 'Rubik', sans-serif;
            font-weight: 500;
            font-size: 1.4rem;
            line-height: 17px;
            color: #FFFFFF; 
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

        padding-block: .4rem;
        background: var(--primary-color);
        border-radius: 4px;

        line-height: 32px;
        color: var(--white);
        font-size: 1.4rem;
        font-weight: 500;
        font-family: "Inter", sans-serif;

        text-align: center;
       }

       .button:hover{
          transition: 0.3s;
          background-color: var(--secondary-color);
       }

      p {
          line-height: 19px;
          letter-spacing: 0.07em;

          display: flex;
          flex-direction: column;
          gap: .8rem;
      }
    }
 
`