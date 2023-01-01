import Image from "next/image";
import { FC } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { BreadRow, Qty } from "../product/product.styles";
import { AnyRow } from "../ui/shared/index.styles";
import { H3, H4, P } from "../ui/typography/index.styles";
import {
  CartArea,
  CartContainer,
  CartTable,
  CheckoutArea,
  ItemQuantity,
  ProductDetail,
  TableBody,
  TableData,
  TableDataArea,
  TableHead,
  TableHeader,
  TableRow,
} from "./cart.styles";
import cartProd from "../../public/cartProd.svg";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Button from "../ui/button";

const Cart: FC = () => {
  return (
    <CartContainer>
      <BreadRow>
        <BiChevronLeft color="#F2994A" size={24} />
        <H3 breadCart>Continue Shopping</H3>
      </BreadRow>

      <CartArea>
        <AnyRow centr>
          <H3>CART</H3>
          <P>You are eligible for free shipping!</P>
        </AnyRow>

        <CartTable>
          <TableHeader>
            <TableRow>
              <TableHead pHead>PRODUCT</TableHead>
              <TableHead>QUANTITY</TableHead>
              <TableHead pEnd>TOTAL</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableData>
                <TableDataArea>
                  <Image src={cartProd} alt="cartProd" />
                  <ProductDetail>
                    <P cartProdTitle>MARI JADE KNIT DRESS</P>
                    <P cartProdSize>S/M</P>
                    <P cartProdPrice>N160,000</P>
                  </ProductDetail>
                </TableDataArea>
              </TableData>

              <TableData>
                <ItemQuantity>
                  <Qty cart>
                    <AiOutlineMinus color="#4F4F4F" />
                    1
                    <AiOutlinePlus color="#4F4F4F" />
                  </Qty>

                  <P cartProdRemove>REMOVE</P>
                </ItemQuantity>
              </TableData>

              <TableData pEnd>
                <P cartProdPrice>N160,000</P>
              </TableData>
            </TableRow>

            <TableRow>
              <TableData>
                <TableDataArea>
                  <Image src={cartProd} alt="cartProd" />
                  <ProductDetail>
                    <P cartProdTitle>MARI JADE KNIT DRESS</P>
                    <P cartProdSize>S/M</P>
                    <P cartProdPrice>N160,000</P>
                  </ProductDetail>
                </TableDataArea>
              </TableData>

              <TableData>
                <ItemQuantity>
                  <Qty cart>
                    <AiOutlineMinus color="#4F4F4F" />
                    1
                    <AiOutlinePlus color="#4F4F4F" />
                  </Qty>

                  <P cartProdRemove>REMOVE</P>
                </ItemQuantity>
              </TableData>

              <TableData pEnd>
                <P cartProdPrice>N160,000</P>
              </TableData>
            </TableRow>
          </TableBody>
        </CartTable>

        <AnyRow>
          <CheckoutArea>
            <H3>TOTAL: N752,000</H3>
            <H4>*Shipping and tax to be calculated at checkout</H4>
            <Button cart>PROCEED TO CHECKOUT</Button>
          </CheckoutArea>
        </AnyRow>
      </CartArea>
    </CartContainer>
  );
};

export default Cart;
