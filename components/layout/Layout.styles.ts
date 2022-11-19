import styled from "styled-components";

interface LayoutProps {
  responses?: boolean;
}

const LayoutContainer = styled.div<LayoutProps>`
  width: 100%;

  background-color: ${({ responses }) => (responses ? "#fafafa" : "#fff")};
  min-height: 100vh;
  max-height: 100%;
`;

export { LayoutContainer };
