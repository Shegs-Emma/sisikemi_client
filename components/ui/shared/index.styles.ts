import styled from "styled-components";

interface StyleProps {
  footer?: boolean;
}

const InputField = styled.input.attrs({
  autoComplete: "off",
})<StyleProps>`
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 18.5px 16px;
  gap: 10px;

  width: 100%;
  width: ${({ footer }) => (footer ? "85%" : "")};
  height: 54px;
  height: ${({ footer }) => (footer ? "46px" : "")};

  border: 0.8px solid #e0e0e0;
  border-radius: 5px;
  background-color: transparent;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  color: #ffffff;
  color: ${({ footer }) => (footer ? "#828282" : "")};

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: #ffffff;
    color: ${({ footer }) => (footer ? "#828282" : "")};
    opacity: 0.5; /* Firefox */
  }

  @media screen and (min-width: 52em) {
    width: 70%;
  }
`;

export { InputField };
