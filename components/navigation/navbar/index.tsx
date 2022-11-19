import Image from "next/image";
import { FC } from "react";
import {
  Currency,
  LogoArea,
  MainHeader,
  MiniHeader,
  NavbarContainer,
  NavButtons,
  ProfileArea,
  ProfileIcons,
} from "./navbar.styles";
import logo from "../../../public/logo.svg";
import { H4, P } from "../../ui/typography/index.styles";
import { HiOutlineChevronDown } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <MiniHeader>TEXT TEXT TEXT TEXT</MiniHeader>
      <MainHeader>
        <LogoArea>
          <Image src={logo} alt="Logo" />
        </LogoArea>
        <NavButtons>
          <H4>NEW IN</H4>
          <H4>SHOP</H4>
          <H4>SALE</H4>
          <H4>RTW</H4>
          <H4>COLLECTIONS</H4>
          <H4>BRIDAL</H4>
        </NavButtons>
        <ProfileArea>
          <Currency>
            <P>NGN N</P>
            <HiOutlineChevronDown className="dropDown" />
          </Currency>
          <ProfileIcons>
            <CgProfile className="profile" size={25} />
            <FiSearch className="profile" size={25} />
            <AiOutlineShoppingCart className="profile" size={25} />
          </ProfileIcons>
        </ProfileArea>
      </MainHeader>
    </NavbarContainer>
  );
};

export default Navbar;
