import styled from "styled-components";
import { LandingContainer } from "../landing/landing.styles";

const NewInContainer = styled(LandingContainer)``;

const FilterHeader = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  padding: 0 2rem;
`;

const GridSide = styled.div`
  width: 15%;
  border-right: 1px solid #e0e0e0;
  /* margin-top: 2rem; */
  height: 4rem;
  padding: 2rem 6rem 0 0;
  display: flex;
  justify-content: space-between;
`;

const MiddleSide = styled.div`
  width: 70%;
`;

const SortSide = styled.div`
  width: 15%;
  border-left: 1px solid #e0e0e0;
`;

const SortBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 1.5rem auto 0 auto;
  text-align: center;
`;

const CaptionImages = styled.div`
  display: flex;
  flex-direction: column;
`;

const Caption = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export {
  NewInContainer,
  FilterHeader,
  GridSide,
  MiddleSide,
  SortSide,
  SortBox,
  CaptionImages,
  Caption,
};
