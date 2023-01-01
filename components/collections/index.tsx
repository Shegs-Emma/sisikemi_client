import Image from "next/image";
import { FC } from "react";
import {
  SectionHeader,
  SectionImages,
  SectionsArea,
} from "../landing/landing.styles";
import { Caption, CaptionImages, NewInContainer } from "../newIn/newIn.styles";
import { H1, P } from "../ui/typography/index.styles";
import coll1 from "../../public/coll1.svg";
import coll2 from "../../public/coll2.svg";
import coll3 from "../../public/coll3.svg";
import coll4 from "../../public/coll4.svg";
import coll5 from "../../public/coll5.svg";
import coll6 from "../../public/coll6.svg";

const Collections: FC = () => {
  return (
    <NewInContainer>
      <SectionHeader>
        <H1 newin>COLLECTIONS</H1>
      </SectionHeader>

      <SectionsArea price>
        <SectionImages collection>
          <CaptionImages>
            <Image src={coll1} alt="coll1" />
            <Caption>
              <P>Sisi Kemi Rtw Collection</P>
              <P price>22 Products</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <Image src={coll2} alt="coll2" />
            <Caption>
              <P>Sisi Kemi Couture Collection</P>
              <P price>22 Products</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <Image src={coll3} alt="coll3" />
            <Caption>
              <P>Recently Added</P>
              <P price>22 Products</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <Image src={coll4} alt="coll4" />
            <Caption>
              <P>Sisi Kemi Rtw Collection</P>
              <P price>22 Products</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <Image src={coll5} alt="coll5" />
            <Caption>
              <P>Sisi Kemi Rtw Collection</P>
              <P price>22 Products</P>
            </Caption>
          </CaptionImages>

          <CaptionImages>
            <Image src={coll6} alt="coll6" />
            <Caption>
              <P>Sisi Kemi Rtw Collection</P>
              <P price>22 Products</P>
            </Caption>
          </CaptionImages>
        </SectionImages>
      </SectionsArea>
    </NewInContainer>
  );
};

export default Collections;
