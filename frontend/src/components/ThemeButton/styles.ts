import styled from 'styled-components'

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 25px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: #ccc;
    transition: 0.4s;

    border-radius: 15px;

    display: flex;
    align-items: center;
  }

  span #icons {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0px 5px 0px 5px;
  }

  span:before {
    position: absolute;
    content: '';
    height: 18px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;

    border-radius: 15px;
  }

  input:checked + span {
    background-color: #2196f4;
  }

  input:checked + span:before {
    transform: translateX(31px);
  }
`
