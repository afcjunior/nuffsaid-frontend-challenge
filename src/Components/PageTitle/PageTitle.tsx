import React from 'react';
import { TitleContainer } from './PageTitle.style';

interface PageTitleProps {
  title?: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ title = "nuffSaid.com Coding Challenge" }) => {
  return (
    <TitleContainer>
      <h2>
      {title}
      </h2>
      <hr/>
    </TitleContainer>
  );
};

export default PageTitle;
