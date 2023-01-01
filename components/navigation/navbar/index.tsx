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
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <MiniHeader>TEXT TEXT TEXT TEXT</MiniHeader>
      <MainHeader>
        <Link href="/">
          <LogoArea>
            <Image src={logo} alt="Logo" />
          </LogoArea>
        </Link>
        <NavButtons>
          <Link href="/newIn">
            <H4 nav>NEW IN</H4>
          </Link>

          <H4>SHOP</H4>

          <Link href="/sale">
            <H4 nav>SALE</H4>
          </Link>

          <Link href="/rtw">
            <H4 nav>RTW</H4>
          </Link>

          <Link href="/collections">
            <H4 nav>COLLECTIONS</H4>
          </Link>
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
