import styled from "styled-components";

const MobileNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 52em) {
    display: none;
  }
`;

export { MobileNavContainer };
