import Image from "next/image";
import { FC } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { IoGrid } from "react-icons/io5";
import {
  SectionHeader,
  SectionImages,
  SectionsArea,
} from "../landing/landing.styles";
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
import Button from "../ui/button";
import recent1 from "../../public/recent1.svg";
import recent2 from "../../public/recent2.svg";
import recent3 from "../../public/recent3.svg";
import recent4 from "../../public/recent4.svg";
import bimpe from "../../public/bimpe.svg";
import folake from "../../public/folake.svg";
import chisom from "../../public/chisom.svg";
import aisha from "../../public/aisha.svg";
import { H1, H3, P } from "../ui/typography/index.styles";

const Rtw: FC = () => {
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
            <Image src={folake} alt="folake" />
            <Caption>
              <P>FOLAKE</P>
              <P price>N35,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <Image src={chisom} alt="chisom" />
            <Caption>
              <P>CHISOM</P>
              <P price>N24,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <Image src={aisha} alt="aisha" />
            <Caption>
              <P>AISHA</P>
              <P price>N68,000</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <Image src={bimpe} alt="bimpe" />
            <Caption>
              <P>BIMPE</P>
              <P price>N40,000</P>
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

export default Rtw;
