import styled from 'styled-components'

export const SeeMoreButtonWrapper = styled.button`
  display: block;
  width: 100%;

  margin-top: 2.5rem;
  padding-block: 0.4rem;
  background: ${({ theme }) => theme.buttonBackgroundColor};
  border-radius: 4px;
  border-color: ${({ theme }) => theme.buttonBackgroundColor};

  line-height: 32px;
  color: var(--white);
  font-size: 1.6rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;

  text-align: center;
`
