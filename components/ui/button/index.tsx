import { FC, MouseEventHandler, ReactNode } from "react";
import { ButtonContainer } from "./button.styles";

interface IProps {
  children: ReactNode;
  clicked?: MouseEventHandler<HTMLButtonElement>;
  collection?: boolean;
  subscribe?: boolean;
  product?: boolean;
  size?: boolean;
  cart?: boolean;
}

const Button: FC<IProps> = ({
  children,
  clicked,
  collection,
  subscribe,
  product,
  size,
  cart,
}: IProps) => (
  <ButtonContainer
    onClick={clicked}
    collection={collection}
    subscribe={subscribe}
    product={product}
    size={size}
    cart={cart}
  >
    {children}
  </ButtonContainer>
);

export default Button;

Button.defaultProps = {
  clicked: undefined,
  collection: undefined,
  subscribe: undefined,
  product: undefined,
  size: undefined,
  cart: undefined,
};
