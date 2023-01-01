import styled from "styled-components";

interface StyleProps {
  collection?: boolean;
  subscribe?: boolean;
  product?: boolean;
  size?: boolean;
  cart?: boolean;
}

const ButtonContainer = styled.button<StyleProps>`
  width: 85px;
  width: ${({ collection }) => (collection ? "157px" : "")};
  width: ${({ product }) => (product ? "183px" : "")};
  width: ${({ size }) => (size ? "104px" : "")};
  width: ${({ subscribe, cart }) => (subscribe || cart ? "100%" : "")};
  height: 31px;

  height: ${({ collection, cart }) => (collection || cart ? "43px" : "")};
  height: ${({ subscribe }) => (subscribe ? "54px" : "")};
  height: ${({ product, size }) => (product || size ? "36px" : "")};
  padding: 8px 24px;
  padding: ${({ collection }) => (collection ? "14px 8px" : "")};
  padding: ${({ subscribe }) => (subscribe ? "17px 32px" : "")};
  padding: ${({ product, size }) => (product || size ? "10px 15px" : "")};
  background: #f2f2f2;
  background: ${({ product, size }) => (product || size ? "none" : "")};
  background: ${({ cart }) => (cart ? "#363435" : "")};
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  width: ${({ cart }) => (cart ? "8px" : "")};
  border: ${({ product, size }) =>
    product || size ? "0.8px solid #C4C4C4" : ""};

  display: ${({ product, size }) => (product || size ? "flex" : "")};
  justify-content: ${({ product, size }) =>
    product || size ? "space-between" : ""};

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  /* SISI Black */
  color: #363435;
  color: ${({ collection }) => (collection ? "#333333" : "")};
  color: ${({ cart }) => (cart ? "#F2F2F2" : "")};

  margin: 0 auto;
  margin: ${({ subscribe }) => (subscribe ? "1rem 0 0 0" : "")};
  margin: ${({ cart }) => (cart ? "1rem 0" : "")};
  &:hover,
  &:active {
  }
  &:disabled {
  }

  @media screen and (min-width: 52em) {
    width: ${({ subscribe }) => (subscribe ? "171px" : "")};
    width: ${({ cart }) => (cart ? "100%" : "")};
    margin: ${({ subscribe }) => (subscribe ? "0 auto" : "")};
  }
`;

export { ButtonContainer };
