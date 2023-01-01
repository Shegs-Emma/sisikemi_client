import styled from "styled-components";

interface StyleProps {
  carousel?: boolean;
  product?: boolean;
  purchase?: boolean;
  purchaseColl?: boolean;
  footer?: boolean;
  footerTitle?: boolean;
  footerCont?: boolean;
  price?: boolean;
  newin?: boolean;
  sale?: boolean;
  nav?: boolean;
  breadC?: boolean;
  productItm?: boolean;
  sizeItm?: boolean;
  descTexts?: boolean;
  descTop?: boolean;
  breadCart?: boolean;
  cartProdTitle?: boolean;
  cartProdSize?: boolean;
  cartProdPrice?: boolean;
  cartProdRemove?: boolean;
}

const H1 = styled.h1<StyleProps>`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-weight: ${({ purchase }) => (purchase ? "600" : "")};
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.12em;

  text-align: ${({ purchase }) => (purchase ? "center" : "")};

  color: #fafafa;
  color: ${({ purchase }) => (purchase ? "#F2F2F2" : "")};
  color: ${({ newin }) => (newin ? "#4F4F4F" : "")};
  margin: ${({ purchase }) => (purchase ? "2rem 0" : "")};

  @media screen and (min-width: 52em) {
    font-size: 18px;
  }
`;

const H2 = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.06em;

  /* SISI Black */
  color: #363435;
  margin: 2rem 0;

  @media screen and (min-width: 52em) {
    font-size: 20px;
  }
`;

const H3 = styled.h3<StyleProps>`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-weight: ${({ product, productItm }) =>
    product || productItm ? "500" : ""};
  font-weight: ${({ footerCont, breadC, descTexts, breadCart }) =>
    footerCont || breadC || descTexts || breadCart ? "400" : ""};
  font-size: 12px;
  font-size: ${({
    product,
    purchase,
    purchaseColl,
    footer,
    footerTitle,
    footerCont,
    descTexts,
    descTop,
  }) =>
    product ||
    purchase ||
    purchaseColl ||
    footer ||
    footerTitle ||
    footerCont ||
    descTexts ||
    descTop
      ? "14px"
      : ""};
  line-height: 130%;
  /* or 23px */
  letter-spacing: 0.08em;

  /* Gray 2 */
  color: #4f4f4f;
  color: ${({ product }) => (product ? "#F2F2F2" : "")};
  color: ${({ breadCart }) => (breadCart ? "#F2994A" : "")};
  color: ${({ purchase }) => (purchase ? "#ffffff" : "")};
  color: ${({ purchaseColl }) => (purchaseColl ? "#E0E0E0" : "")};
  color: ${({ footer, footerTitle, descTop }) =>
    footer || footerTitle || descTop ? "#333333" : ""};

  text-align: ${({ purchase, purchaseColl }) =>
    purchase || purchaseColl ? "center" : ""};

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 0;
  margin: 0;
  margin: ${({ footerTitle }) => (footerTitle ? "1.5rem 0 1.5rem 0" : "")};
  margin: ${({ productItm }) => (productItm ? ".4rem 0" : "")};
  margin: ${({ footerCont }) => (footerCont ? "0 0 1.5rem 0" : "")};
  margin: ${({ descTop }) => (descTop ? "0 0 .5rem 0" : "")};

  @media screen and (min-width: 52em) {
    font-size: 18px;
    font-size: ${({
      product,
      purchase,
      purchaseColl,
      footer,
      footerTitle,
      footerCont,
      descTexts,
      descTop,
    }) =>
      product ||
      purchase ||
      purchaseColl ||
      footer ||
      footerTitle ||
      footerCont ||
      descTexts ||
      descTop
        ? "16px"
        : ""};
  }
`;

const H4 = styled.h4<StyleProps>`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  /* identical to box height */

  /* Gray 1 */
  color: #333333;
  color: ${({ carousel }) => (carousel ? "#fafafa" : "")};
  margin: ${({ carousel }) => (carousel ? "0" : "")};

  cursor: ${({ nav }) => (nav ? "pointer" : "")};

  @media screen and (min-width: 52em) {
    font-size: 14px;
  }
`;

const P = styled.h4<StyleProps>`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-weight: ${({ footerCont }) => (footerCont ? "400" : "")};
  font-size: 12px;
  font-size: ${({ footerCont }) => (footerCont ? "14px" : "")};
  font-size: ${({ cartProdTitle }) => (cartProdTitle ? "11px" : "")};
  font-size: ${({ cartProdPrice }) => (cartProdPrice ? "10px" : "")};
  font-size: ${({ cartProdSize, cartProdRemove }) =>
    cartProdSize || cartProdRemove ? "9px" : ""};
  line-height: 15px;
  line-height: ${({ footerCont }) => (footerCont ? "24px" : "")};
  /* identical to box height */
  letter-spacing: 0.09em;

  /* Gray 2 */
  color: #4f4f4f;
  margin: ${({ footerCont, product, price }) =>
    footerCont || product || price ? "0 0 0 0" : ""};
  margin: ${({ productItm, cartProdTitle, cartProdSize, cartProdPrice }) =>
    productItm || cartProdTitle || cartProdSize || cartProdPrice
      ? "0 0 .4rem 0"
      : ""};
  margin: ${({ cartProdRemove }) => (cartProdRemove ? "1rem 0 0 15%" : "")};
  text-decoration: ${({ cartProdRemove }) =>
    cartProdRemove ? "underline" : ""};
`;

const Span = styled.span<StyleProps>`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  font-size: ${({ sale }) => (sale ? "12px" : "")};
  line-height: 17px;
  /* identical to box height */

  /* SISI Black */
  color: #363435;

  border-bottom: 1px solid #363435;
  border-bottom: ${({ sale, productItm, sizeItm }) =>
    sale || productItm || sizeItm ? "none" : ""};
  width: 50%;
  text-align: center;
  text-align: ${({ sizeItm }) => (sizeItm ? "left" : "")};
  padding: 0 0 0.5rem 0;
  margin: 1rem auto 0 auto;

  margin: ${({ sale }) => (sale ? "0 auto" : "")};
  margin: ${({ productItm, sizeItm }) => (productItm || sizeItm ? "0" : "")};
  color: ${({ sale }) => (sale ? "#FAFAFA" : "")};
  width: ${({ sale }) => (sale ? "100%" : "")};

  @media screen and (min-width: 52em) {
    width: 31%;
    margin: 1rem 0 0 0;
    margin: ${({ productItm, sizeItm }) => (productItm || sizeItm ? "0" : "")};
    width: ${({ productItm, sizeItm }) =>
      productItm || sizeItm ? "100%" : ""};
  }
`;

export { H1, H2, H4, P, H3, Span };
