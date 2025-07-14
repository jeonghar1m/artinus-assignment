import styled from "styled-components";

export const Header = styled.div`
  position: relative;
  width: 100%;
  > .prev-button {
    cursor: pointer;
    color: #000;
    position: absolute;
    left: 10px;
  }
  > .cart-button {
    position: absolute;
    right: 10px;
    top: 0;
    background-color: transparent;
    border: 1px solid gray;
  }
`;
