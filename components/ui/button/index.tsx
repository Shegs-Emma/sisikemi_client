import { FC, MouseEventHandler, ReactNode } from "react";
import { ButtonContainer } from "./button.styles";

interface IProps {
  children: ReactNode;
  clicked?: MouseEventHandler<HTMLButtonElement>;
  collection?: boolean;
  subscribe?: boolean;
}

const Button: FC<IProps> = ({
  children,
  clicked,
  collection,
  subscribe,
}: IProps) => (
  <ButtonContainer
    onClick={clicked}
    collection={collection}
    subscribe={subscribe}
  >
    {children}
  </ButtonContainer>
);

export default Button;

Button.defaultProps = {
  clicked: undefined,
  collection: undefined,
  subscribe: undefined,
};
