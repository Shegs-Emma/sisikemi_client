import styled from "styled-components";
import { LandingContainer } from "../landing/landing.styles";

interface StyleProps {
  pHead?: boolean;
  pEnd?: boolean;
}

const CartContainer = styled(LandingContainer)``;

const CartArea = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const CartTable = styled.table`
  margin: 3rem 0;
`;

const TableRow = styled.tr<StyleProps>`
  width: 100%;
`;

const TableHeader = styled.thead`
  width: 100%;
`;

const TableHead = styled.th<StyleProps>`
  width: ${({ pHead }) => (pHead ? "65%" : "")};
  text-align: left;
  text-align: ${({ pEnd }) => (pEnd ? "right" : "")};
  padding: 0 0 1rem 0;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  /* identical to box height, or 18px */
  letter-spacing: 0.2em;

  /* Gray 1 */
  color: #333333;

  border-bottom: 1px solid #bdbdbd;
`;

const TableBody = styled.tbody`
  width: 100%;
`;

const TableData = styled.td<StyleProps>`
  text-align: ${({ pEnd }) => (pEnd ? "right" : "")};
`;

const TableDataArea = styled.div`
  display: flex;
  margin: 2rem 0;
`;

const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 4rem;
  height: 4rem;
`;

const ItemQuantity = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckoutArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 24.4375rem;

  margin: 0 0 0 auto;
  text-align: right;
`;

export {
  CartContainer,
  CartArea,
  CartTable,
  TableHead,
  TableRow,
  TableData,
  ProductDetail,
  ItemQuantity,
  TableHeader,
  TableBody,
  TableDataArea,
  CheckoutArea,
};
