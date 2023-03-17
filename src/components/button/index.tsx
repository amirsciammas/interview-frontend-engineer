import { PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
  onClick: () => void;
  disabled?: boolean;
}>;
export const Button = ({ onClick, children }: ButtonProps) => (
  <button onClick={onClick}>{children}</button>
);
