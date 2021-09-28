import React from 'react';
import { Button } from '@material-ui/core';
import { MessagesContext } from '../../context';
import { CardContainer } from '@Components/Card/Card.style';

type CardProps = {
  message: string;
  priority: number;
};

const Card: React.FC<CardProps> = ({ message, priority }) => {
  return <MessagesContext.Consumer>
    {context => (
      <CardContainer className={`${priority}`} priority={priority} data-testid="card">
        <p>
          {message}
        </p>
        <div>
          <Button onClick={() => context?.removeSpecificMessage(message)}>
            Clear
          </Button>
        </div>
      </CardContainer>
    )}
  </MessagesContext.Consumer>;
}

export default Card;