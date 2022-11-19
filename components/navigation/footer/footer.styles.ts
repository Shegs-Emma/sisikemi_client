import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4rem 2rem;

  @media screen and (min-width: 52em) {
    flex-direction: row;
  }
`;

const FooterLogo = styled.div`
  margin: 1rem 0 2rem 0;
`;

const LeftFooterArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  @media screen and (min-width: 52em) {
    width: 20%;
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const MiddleFooterArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 4rem;

  @media screen and (min-width: 52em) {
    width: 20%;
    margin-top: 0;
  }
`;

const RightFooterArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;

  @media screen and (min-width: 52em) {
    width: 30%;
    margin-top: 0;
  }
`;

const ReachOut = styled.div`
  display: flex;
  margin: 2rem 0;
`;

const SendIcon = styled.div`
  height: 46px;
  background-color: #333333;
  border: 1px solid #333333;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  padding: 0.8rem;
`;

export {
  FooterContainer,
  LeftFooterArea,
  MiddleFooterArea,
  RightFooterArea,
  FooterLogo,
  Socials,
  ReachOut,
  SendIcon,
};
