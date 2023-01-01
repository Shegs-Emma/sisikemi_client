import { FC } from "react";
import { H1, H3, P, Span } from "../ui/typography/index.styles";
import {
  BreadRow,
  LargeShow,
  MoreInfo,
  ProductContainer,
  ProductImages,
  ProductInfo,
  ProductSection,
  Qty,
  Size,
  SizeBar,
  SizeGuide,
  Sizes,
  Variant,
  Variants,
} from "./product.styles";
import { BiChevronRight } from "react-icons/bi";
import { TbHanger } from "react-icons/tb";
import Image from "next/image";
import largeProduct from "../../public/largeProduct.svg";
import small1 from "../../public/small1.svg";
import small2 from "../../public/small2.svg";
import small3 from "../../public/small3.svg";
import small4 from "../../public/small4.svg";
import small5 from "../../public/small5.svg";
import small6 from "../../public/small6.svg";
import { AnyRow } from "../ui/shared/index.styles";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Button from "../ui/button";
import { BsChevronRight } from "react-icons/bs";
import {
  SectionHeader,
  SectionImages,
  SectionsArea,
} from "../landing/landing.styles";
import { Caption, CaptionImages } from "../newIn/newIn.styles";

import recent1 from "../../public/recent1.svg";
import recent2 from "../../public/recent2.svg";
import recent3 from "../../public/recent3.svg";
import recent4 from "../../public/recent4.svg";

const Product: FC = () => {
  return (
    <ProductContainer>
      <BreadRow>
        <H3 breadC>Home Page</H3>
        <BiChevronRight color="#363435" size={24} />
        <H3 breadC>Product Page</H3>
      </BreadRow>

      <ProductSection>
        <ProductImages>
          <Variants>
            <Variant>
              <Image src={small1} alt="small1" />
            </Variant>

            <Variant>
              <Image src={small2} alt="small2" />
            </Variant>

            <Variant>
              <Image src={small3} alt="small3" />
            </Variant>

            <Variant>
              <Image src={small4} alt="small4" />
            </Variant>

            <Variant>
              <Image src={small5} alt="small5" />
            </Variant>

            <Variant>
              <Image src={small6} alt="small6" />
            </Variant>
          </Variants>
          <LargeShow>
            <Image src={largeProduct} alt="largeProduct" />
          </LargeShow>
        </ProductImages>
        <ProductInfo>
          <AnyRow>
            <P productItm>SISI KEMI</P>
            <H3>PRODUCT NAME IN CAPITAL LETTERS</H3>
            <H3 productItm>N250,000</H3>
          </AnyRow>

          <AnyRow>
            <SizeGuide>
              <TbHanger color="#4F4F4F" />
              <Span productItm>Size Guide</Span>
            </SizeGuide>
          </AnyRow>

          <AnyRow>
            <Size>
              <Span sizeItm>Size</Span>
              <Sizes>
                <SizeBar active>S</SizeBar>
                <SizeBar>M</SizeBar>
                <SizeBar>L</SizeBar>
                <SizeBar>XL</SizeBar>
                <SizeBar>XXL</SizeBar>
              </Sizes>
            </Size>
          </AnyRow>

          <AnyRow>
            <Size>
              <Span sizeItm>Color</Span>
              <Sizes colorSiz>
                <SizeBar colorSiz active>
                  Red
                </SizeBar>
                <SizeBar colorSiz>Blue</SizeBar>
                <SizeBar colorSiz>Black</SizeBar>
                <SizeBar colorSiz>Yellow</SizeBar>
              </Sizes>
            </Size>
          </AnyRow>

          <AnyRow>
            <Size>
              <Span sizeItm>Quantity:</Span>
              <Qty>
                <AiOutlineMinus color="#4F4F4F" />
                1
                <AiOutlinePlus color="#4F4F4F" />
              </Qty>
            </Size>
          </AnyRow>

          <AnyRow>
            <Button cart>ADD TO CART</Button>
          </AnyRow>

          <AnyRow>
            <H3 descTop>Description</H3>
            <H3 descTexts>
              This dress was designed with love by our team of extra ordinary
              talents with love and appreciation for the corporate woman who
              wants to potray authority while still maintainng elegance and
              being stylish and professional at all times. This dress was
              designed with love
            </H3>
          </AnyRow>

          <MoreInfo>
            <H3 descTexts>MORE INFORMATION</H3>

            <BsChevronRight color="#4F4F4F" />
          </MoreInfo>
        </ProductInfo>
      </ProductSection>

      <SectionHeader>
        <H1 newin>YOU MAY ALSO LIKE</H1>
      </SectionHeader>

      <SectionsArea price>
        <SectionImages>
          <CaptionImages>
            <Image src={recent1} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <Image src={recent2} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <Image src={recent3} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <Image src={recent4} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>
        </SectionImages>
      </SectionsArea>

      <SectionHeader>
        <H1 newin>RECENTLY VIEWED</H1>
      </SectionHeader>

      <SectionsArea price>
        <SectionImages>
          <CaptionImages>
            <Image src={recent1} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <Image src={recent2} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <Image src={recent3} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <Image src={recent4} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>
        </SectionImages>
      </SectionsArea>
    </ProductContainer>
  );
};

export default Product;
