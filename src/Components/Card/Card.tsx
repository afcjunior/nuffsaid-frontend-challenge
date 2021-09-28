import React from 'react';
import { Button } from '@material-ui/core';
import { CardContainer } from '@Components/Card/Card.style';
import { Priority } from '../../types';
import { useSocket } from '../../Hooks/useSocket';

type CardProps = {
  message: string;
  priority: Priority;
};

const Card: React.FC<CardProps> = ({ message, priority }) => {
  const { removeSpecificMessage } = useSocket();
  return (
    <CardContainer className={`${priority}`} priority={priority} data-testid="card">
      <p>
        {message}
      </p>
      <div>
        <Button onClick={() => removeSpecificMessage(message)}>
          Clear
        </Button>
      </div>
    </CardContainer>
  )
}

export default Card;