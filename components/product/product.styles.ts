import styled from "styled-components";
import { LandingContainer } from "../landing/landing.styles";

interface StyleProps {
  active?: boolean;
  colorSiz?: boolean;
  cart?: boolean;
}

const ProductContainer = styled(LandingContainer)``;

const BreadRow = styled.div`
  display: flex;
  margin: 4rem 2rem;
`;

const ProductSection = styled.div`
  width: 100%;
  padding: 0 2rem 15rem 2rem;
  display: flex;
  justify-content: space-between;

  border-bottom: 0.5px solid #4f4f4f;
`;

const ProductImages = styled.div`
  width: 47%;
  display: flex;
  justify-content: space-between;
`;

const Variants = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
`;

const Variant = styled.div`
  margin: 0 0 0.9rem 0;
`;

const LargeShow = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const ProductInfo = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
`;

const SizeGuide = styled.div`
  width: 7.875rem;
  border: 0.4px solid #828282;
  border-radius: 4px;
  padding: 10px 12px 5px;

  display: flex;
  justify-content: space-between;

  margin: 0.5rem 0 0.5rem auto;
`;

const Size = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0.45rem 0;
`;

const Sizes = styled.div<StyleProps>`
  width: 60%;
  width: ${({ colorSiz }) => (colorSiz ? "70%" : "")};
  display: flex;
  justify-content: space-between;
`;

const SizeBar = styled.div<StyleProps>`
  /* padding: 14px 16px; */
  padding: 14px 0;
  width: 3rem;
  width: ${({ colorSiz }) => (colorSiz ? "5.375rem" : "")};
  border: 0.4px solid #828282;
  border-radius: 4px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  /* identical to box height, or 14px */

  background-color: ${({ active }) => (active ? "#828282" : "")};

  /* Gray 2 */
  color: #4f4f4f;
  color: ${({ active }) => (active ? "#F2F2F2" : "")};

  text-align: center;
`;

const Qty = styled.div<StyleProps>`
  padding: 12px 24px;
  padding: ${({ cart }) => (cart ? "12px 15px" : "")};
  gap: 10px;

  width: 107px;
  width: ${({ cart }) => (cart ? "111px" : "")};

  /* Gray 3 */
  border: 0.4px solid #828282;
  border-radius: 4px;
  box-sizing: border-box;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;

  color: #4f4f4f;

  display: flex;
  justify-content: space-between;
`;

const MoreInfo = styled.div`
  margin: 1.5rem 0 0 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

  box-sizing: border-box;
  padding: 10px 16px;
  border-width: 0.8px 0px;
  border-style: solid;
  border-color: #c4c4c4;
`;

export {
  ProductContainer,
  BreadRow,
  ProductSection,
  ProductInfo,
  ProductImages,
  Variants,
  Variant,
  LargeShow,
  SizeGuide,
  Size,
  SizeBar,
  Sizes,
  Qty,
  MoreInfo,
};
