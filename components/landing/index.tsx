import { FC, useState } from "react";
import {
  BottomInfo,
  BottomLayer,
  CarouselInfo,
  LandingContainer,
  LeftSide,
  ProductHeader,
  ProductImage,
  ProductImages,
  ProductInfo,
  RightSide,
  Section,
  SectionHeader,
  SectionHeaderProduct,
  SectionImages,
  SectionsArea,
  Slide,
  SliderArea,
  SliderAreaMobile,
  SubscriptionArea,
  SubscriptionForm,
  SubscriptionItems,
} from "./landing.styles";
import slideImage1 from "../../public/slider_img.svg";
import slideImageMobile from "../../public/mobile_slide.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { H1, H2, H3, H4, P, Span } from "../ui/typography/index.styles";
import Button from "../ui/button";
import sectionImage from "../../public/section.svg";
import productImage from "../../public/product.svg";
import layerImage from "../../public/layer.svg";
import { InputField } from "../ui/shared/index.styles";

const Landing: FC = () => {
  const [projectName, setProjectName] = useState<string>("");
  return (
    <LandingContainer>
      <SliderArea>
        <Carousel
          autoPlay={false}
          showArrows={false}
          showStatus={false}
          infiniteLoop={true}
        >
          <Slide>
            <Image src={slideImage1} />
            <CarouselInfo>
              <H4 carousel>New in</H4>
              <H1>COLLECTION NAME</H1>
              <Button>SHOP</Button>
            </CarouselInfo>
          </Slide>
          <Slide>
            <Image src={slideImage1} />
            <CarouselInfo>
              <H4 carousel>New in</H4>
              <H1>COLLECTION NAME</H1>
              <Button>SHOP</Button>
            </CarouselInfo>
          </Slide>
          <Slide>
            <Image src={slideImage1} />
            <CarouselInfo>
              <H4 carousel>New in</H4>
              <H1>COLLECTION NAME</H1>
              <Button>SHOP</Button>
            </CarouselInfo>
          </Slide>
        </Carousel>
      </SliderArea>
      <SliderAreaMobile>
        <Carousel
          autoPlay={false}
          showArrows={false}
          showStatus={false}
          infiniteLoop={true}
        >
          <Slide>
            <Image src={slideImageMobile} />
            <CarouselInfo>
              <H4 carousel>New in</H4>
              <H1>COLLECTION NAME</H1>
              <Button>SHOP</Button>
            </CarouselInfo>
          </Slide>
          <Slide>
            <Image src={slideImageMobile} />
            <CarouselInfo>
              <H4 carousel>New in</H4>
              <H1>COLLECTION NAME</H1>
              <Button>SHOP</Button>
            </CarouselInfo>
          </Slide>
          <Slide>
            <Image src={slideImageMobile} />
            <CarouselInfo>
              <H4 carousel>New in</H4>
              <H1>COLLECTION NAME</H1>
              <Button>SHOP</Button>
            </CarouselInfo>
          </Slide>
        </Carousel>
      </SliderAreaMobile>
      <SectionsArea>
        <SectionHeader>
          <Section active>
            <H3>SECTION 1</H3>
          </Section>

          <Section>
            <H3>SECTION 2</H3>
          </Section>
        </SectionHeader>
        <SectionImages>
          <Image src={sectionImage} alt="section-img" />
          <Image src={sectionImage} alt="section-img" />
          <Image src={sectionImage} alt="section-img" />
          <Image src={sectionImage} alt="section-img" />
        </SectionImages>
      </SectionsArea>
      <SectionsArea>
        <SectionHeaderProduct>
          <ProductHeader>
            <H3 product>VIEW ALL PRODUCTS</H3>
          </ProductHeader>
        </SectionHeaderProduct>
        <ProductImages>
          <ProductImage>
            <Image src={productImage} />
            <ProductInfo>
              <Button collection>VIEW COLLECTION</Button>
            </ProductInfo>
          </ProductImage>
          <ProductImage>
            <Image src={productImage} />
            <ProductInfo>
              <Button collection>VIEW COLLECTION</Button>
            </ProductInfo>
          </ProductImage>
          <ProductImage>
            <Image src={productImage} />
            <ProductInfo>
              <Button collection>VIEW COLLECTION</Button>
            </ProductInfo>
          </ProductImage>
        </ProductImages>
      </SectionsArea>
      <SubscriptionArea>
        <SubscriptionItems>
          <H3 purchase>10% OFF YOUR FIRST PURCHASE</H3>
          <H1 purchase>SIGN UP</H1>
          <H3 purchaseColl>DISCOVER EXCLUSIVE NEW COLLECTIONS</H3>
          <SubscriptionForm>
            <InputField placeholder="Enter your email" />
            <Button subscribe>SUBSCRIBE</Button>
          </SubscriptionForm>
        </SubscriptionItems>
      </SubscriptionArea>
      <BottomLayer>
        <LeftSide>
          <BottomInfo>
            <H3>DESIGNED FOR EVERY WOMAN: ALL WOMEN</H3>
            <H2>#SISIKEMI</H2>
            <Span>VIEW ALL PRODUCTS</Span>
          </BottomInfo>
        </LeftSide>
        <RightSide>
          <Image src={layerImage} alt="layer image" />
        </RightSide>
      </BottomLayer>
    </LandingContainer>
  );
};

export default Landing;
