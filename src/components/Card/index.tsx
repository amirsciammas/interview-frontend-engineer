import React from 'react';
import * as classes from './card.module.css';

interface Props {
  children: React.ReactChild
  additionalStyles?: Record<string, any>;
}

function Card(props: Props) {
  const { children, additionalStyles } = props;
  return (
    <div className={classes.card} style={additionalStyles}>
      {children}
    </div>
  );
}

Card.defaultProps = {
  additionalStyles: {},
};

export default Card;
