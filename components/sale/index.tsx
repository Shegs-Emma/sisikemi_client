import { FC } from "react";
import {
  Caption,
  CaptionImages,
  FilterHeader,
  GridSide,
  MiddleSide,
  NewInContainer,
  SortBox,
  SortSide,
} from "../newIn/newIn.styles";
import { IoGrid } from "react-icons/io5";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { H1, H3, P, Span } from "../ui/typography/index.styles";
import {
  SectionHeader,
  SectionImages,
  SectionsArea,
} from "../landing/landing.styles";
import Button from "../ui/button";
import sectionImage from "../../public/section.svg";
import recent1 from "../../public/recent1.svg";
import recent2 from "../../public/recent2.svg";
import recent3 from "../../public/recent3.svg";
import recent4 from "../../public/recent4.svg";
import Image from "next/image";
import { SaleSpace } from "./sale.styles";

const Sale: FC = () => {
  return (
    <NewInContainer>
      <FilterHeader>
        <GridSide>
          <IoGrid color="#BDBDBD" size={24} />
          <BsGrid3X3GapFill color="#363435" size={24} />
        </GridSide>
        <MiddleSide />
        <SortSide>
          <SortBox>
            <H3>SORT</H3>
            <BiChevronDown color="#363435" size={24} />
          </SortBox>
        </SortSide>
      </FilterHeader>

      <SectionHeader newin>
        <Button product>
          <P product>PRODUCT TYPE</P>
          <BiChevronDown color="#363435" size={20} className="product" />
        </Button>
        <Button size>
          <P product>SIZE</P>
          <BiChevronDown color="#363435" size={20} className="product" />
        </Button>
      </SectionHeader>

      <SectionsArea price>
        <SectionImages>
          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
            <Caption>
              <P>HAND BEADED RHINESTONE DRESS</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <SaleSpace>
              <Span sale>SALE</Span>
            </SaleSpace>
            <Image src={sectionImage} alt="section-img" />
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
    </NewInContainer>
  );
};

export default Sale;
