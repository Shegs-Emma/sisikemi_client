import styled from "styled-components";

interface StyleProps {
  active?: boolean;
}

const LandingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;

  @media screen and (min-width: 52em) {
    padding: 7rem 0 0 0;
  }
`;

const SliderArea = styled.div`
  display: none;

  @media screen and (min-width: 52em) {
    width: 100%;
    display: block;
  }
`;

const SliderAreaMobile = styled.div`
  display: block;
  width: 100%;

  @media screen and (min-width: 52em) {
    display: none;
  }
`;

const Slide = styled.div`
  width: 100%;
`;

const CarouselInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 10rem;
  z-index: 10;
  height: 5em;
  margin: 0 auto 0 10%;

  @media screen and (min-width: 52em) {
    top: 20rem;
    margin: 0 auto 0 40%;
  }
`;

const SectionsArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45%;
  margin: 4rem auto 5rem auto;

  @media screen and (min-width: 52em) {
    width: 20%;
  }
`;

const SectionHeaderProduct = styled(SectionHeader)`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 4rem auto 5rem auto;

  @media screen and (min-width: 52em) {
    width: 20%;
  }
`;

const Section = styled.div<StyleProps>`
  padding-bottom: 0.2rem;
  border-bottom: ${({ active }) => (active ? "1.5px solid #4f4f4f" : "")};
`;
const SectionImages = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  row-gap: 3.5rem;
  padding: 0 1.5rem;

  @media screen and (min-width: 52em) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProductImage = styled.div`
  width: 95%;
`;

const ProductHeader = styled.div`
  background-color: #363435;
  padding: 1rem;
  margin: 2rem auto 0 auto;

  @media screen and (min-width: 52em) {
    margin: 2rem 0 0 0;
  }
`;

const ProductImages = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 0 1.5rem 0 2.5rem;
  gap: 10px;
  margin: 5rem 0 0 0;

  @media screen and (min-width: 52em) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProductInfo = styled(CarouselInfo)`
  top: -15rem;
  left: -1rem;
  position: relative;

  @media screen and (min-width: 52em) {
    top: -17rem;
    left: -5rem;
  }
`;

const SubscriptionArea = styled.div`
  width: 100%;
  height: 640px;
  background: #a86728;
  display: flex;
  flex-direction: column;
`;

const SubscriptionItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 15% auto 0 auto;

  @media screen and (min-width: 52em) {
    width: 50%;
  }
`;

const SubscriptionForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 0 2rem 0;

  @media screen and (min-width: 52em) {
    flex-direction: row;
  }
`;

const BottomLayer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 0.5px solid #4f4f4f;

  @media screen and (min-width: 52em) {
    flex-direction: row;
  }
`;

const LeftSide = styled.div`
  width: 100%;
  order: 0;

  @media screen and (min-width: 52em) {
    width: 50%;
  }
`;

const RightSide = styled.div`
  width: 100%;
  order: 1;

  @media screen and (min-width: 52em) {
    width: 50%;
  }
`;

const BottomInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20% auto 4rem auto;
  width: 90%;
  text-align: center;

  @media screen and (min-width: 52em) {
    width: 80%;
    text-align: left;
    margin: 40% auto 0 auto;
  }
`;

export {
  LandingContainer,
  SliderArea,
  SliderAreaMobile,
  Slide,
  CarouselInfo,
  SectionsArea,
  SectionHeader,
  Section,
  SectionImages,
  ProductImage,
  ProductHeader,
  ProductImages,
  ProductInfo,
  SubscriptionArea,
  SubscriptionItems,
  SubscriptionForm,
  BottomLayer,
  RightSide,
  LeftSide,
  BottomInfo,
  SectionHeaderProduct,
};
