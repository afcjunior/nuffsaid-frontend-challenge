import React from 'react';
import { CardTitleContainer } from './CardTitle.style';

type CardTitleProps = {
  title: string;
  length: number;
};

const CardTitle: React.FC<CardTitleProps> = ({ title, length }) => (
  <CardTitleContainer>
    <h2>
      {title}
    </h2>
    <p>
      Count {length}
    </p>
  </CardTitleContainer>
);

export default CardTitle;