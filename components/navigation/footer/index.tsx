import Image from "next/image";
import { FC } from "react";
import {
  FooterContainer,
  FooterLogo,
  LeftFooterArea,
  MiddleFooterArea,
  ReachOut,
  RightFooterArea,
  SendIcon,
  Socials,
} from "./footer.styles";
import logo from "../../../public/mini_logo.svg";
import facebook from "../../../public/facebook.svg";
import instagram from "../../../public/instagram.svg";
import whatsapp from "../../../public/whatsapp.svg";
import twitter from "../../../public/twitter.svg";
import { H3, P } from "../../ui/typography/index.styles";
import { InputField } from "../../ui/shared/index.styles";
import { RiSendPlaneFill } from "react-icons/ri";

const Footer: FC = () => {
  return (
    <FooterContainer>
      <LeftFooterArea>
        <FooterLogo>
          <Image src={logo} alt="mini_logo" className="mini_logo" />
        </FooterLogo>
        <H3 footer>FOLLOW SISI KEMI</H3>
        <Socials>
          <Image src={facebook} alt="facebook" />
          <Image src={instagram} alt="instagram" />
          <Image src={whatsapp} alt="whatsapp" />
          <Image src={twitter} alt="twitter" />
        </Socials>
      </LeftFooterArea>
      <MiddleFooterArea>
        <H3 footerTitle>INFO</H3>
        <H3 footerCont>Rtw Collection</H3>
        <H3 footerCont>Couture collection</H3>
        <H3 footerCont>Bridal Collection</H3>
        <H3 footerCont>Sales</H3>
        <H3 footerCont>About Us</H3>
        <H3 footerCont>Contact Us</H3>
        <H3 footerCont>FAQ</H3>
        <H3 footerCont>Order Tracking</H3>
      </MiddleFooterArea>
      <RightFooterArea>
        <H3 footerTitle>STAY UP TO DATE</H3>
        <P footerCont>
          Subscribe to our updates and be the first to know about new releases
        </P>
        <ReachOut>
          <InputField footer placeholder="Input your email" />
          <SendIcon>
            <RiSendPlaneFill size={18} />
          </SendIcon>
        </ReachOut>
      </RightFooterArea>
    </FooterContainer>
  );
};

export default Footer;
