import styled from "styled-components";

const SaleSpace = styled.div`
  position: absolute;
  z-index: 10;
  margin: 0.7rem 0 0 6rem;
  width: 59px;
  height: 23px;
  text-align: center;
  background: #4f4f4f;
  border-radius: 1px;

  @media screen and (min-width: 52em) {
    margin: 0.7rem 0 0 13rem;
  }
`;

export { SaleSpace };
