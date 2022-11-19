import styled from "styled-components";

interface StyleProps {
  collection?: boolean;
  subscribe?: boolean;
}

const ButtonContainer = styled.button<StyleProps>`
  width: 85px;
  width: ${({ collection }) => (collection ? "157px" : "")};
  width: ${({ subscribe }) => (subscribe ? "100%" : "")};
  height: 31px;
  height: ${({ collection }) => (collection ? "43px" : "")};
  height: ${({ subscribe }) => (subscribe ? "54px" : "")};
  padding: 8px 24px;
  padding: ${({ collection }) => (collection ? "14px 8px" : "")};
  padding: ${({ subscribe }) => (subscribe ? "17px 32px" : "")};
  background: #f2f2f2;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  /* SISI Black */
  color: #363435;
  color: ${({ collection }) => (collection ? "#333333" : "")};

  margin: 0 auto;
  margin: ${({ subscribe }) => (subscribe ? "1rem 0 0 0" : "")};
  &:hover,
  &:active {
  }
  &:disabled {
  }

  @media screen and (min-width: 52em) {
    width: ${({ subscribe }) => (subscribe ? "171px" : "")};
    margin: ${({ subscribe }) => (subscribe ? "0 auto" : "")};
  }
`;

export { ButtonContainer };
