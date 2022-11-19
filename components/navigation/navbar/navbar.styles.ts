import styled from "styled-components";

const NavbarContainer = styled.div`
  display: none;

  @media screen and (min-width: 52em) {
    display: flex;
    width: 100%;
    position: fixed;
    z-index: 100;

    flex-direction: column;
  }
`;

const MiniHeader = styled.div`
  width: 100%;
  height: 32px;
  background: radial-gradient(
      111.36% 111.36% at -0.59% -1.7%,
      #e2aa50 0%,
      #a86728 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  text-align: center;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  /* Gray 1 */
  color: #333333;
`;

const MainHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #fafafa;
`;

const LogoArea = styled.div``;

const NavButtons = styled.div`
  display: flex;
  width: 45%;
  justify-content: space-between;
`;

const ProfileArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
`;

const Currency = styled.div`
  display: flex;
`;

const ProfileIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 52em) {
    width: 65%;
  }
`;

export {
  NavbarContainer,
  MiniHeader,
  MainHeader,
  LogoArea,
  NavButtons,
  ProfileArea,
  Currency,
  ProfileIcons,
};
