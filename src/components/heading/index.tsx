import React from 'react';

type HeadingProps = {
  children: JSX.Element
}

export const Heading = ({children}: HeadingProps ) => {
  return <h2>{children}</h2>;
};
