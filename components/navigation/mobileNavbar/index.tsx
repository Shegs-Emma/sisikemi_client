import { FC } from "react";
import {
  LogoArea,
  MainHeader,
  MiniHeader,
  ProfileArea,
  ProfileIcons,
} from "../navbar/navbar.styles";
import { MobileNavContainer } from "./mobileNav.styles";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import mobi_logo from "../../../public/logo.svg";
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const MobileNavbar: FC = () => {
  return (
    <MobileNavContainer>
      <MiniHeader>TEXT TEXT TEXT TEXT</MiniHeader>
      <MainHeader>
        <GiHamburgerMenu className="burger" size={25} />
        <LogoArea>
          <Image src={mobi_logo} alt="Logo" />
        </LogoArea>
        <ProfileArea>
          <ProfileIcons>
            <FiSearch className="profile" size={25} />
            <AiOutlineShoppingCart className="profile" size={25} />
          </ProfileIcons>
        </ProfileArea>
      </MainHeader>
    </MobileNavContainer>
  );
};

export default MobileNavbar;
