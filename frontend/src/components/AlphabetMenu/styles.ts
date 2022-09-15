import styled from "styled-components";

export const ScrollMenu = styled.menu`
    padding-bottom: 1.6rem;

    display: grid;
    grid-auto-flow: column;
    //Used to set "automatically" the columns width, once we dont know how many columns 
    grid-auto-columns: min-content;
    gap: 1rem;

    overflow-x: scroll;
    //Tells the page that the user cant scroll out another elements at the end of the scroll of this element
    overscroll-behavior-inline: contain;

    /*Scroll snap properties to make the snap points clear*/
    scroll-snap-type: inline mandatory;
    scroll-padding-inline: 1rem;
    *{
      //We r basically setting in which point of the elements the snap should happen
      //in this case, in the start of each element on this div
      scroll-snap-align: start;
    }

    //Change scrollbar on -moz based browsers
    scrollbar-color: var(--primary-color) var(--secondary-color);
    scrollbar-width: thin;

    //For the rest of the browsers that use -webkit
    ::-webkit-scrollbar{
      background-color: var(--secondary-color);
      height: 0.2rem;
    }
    
    ::-webkit-scrollbar-thumb{
      background-color: var(--primary-color);
    }
    
    .scroll-element{
      height: 2.4rem;
      width: 5.17rem;

      display: flex;
      justify-content: center;
      align-items: center;

      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 3.2rem;
      text-align: center;

      border: 1px solid var(--secondary-color);
      border-radius: 3.7rem;
    }

    .showall-element{
      width: 6.6rem;

      background-color: var(--secondary-color);
    }

` 