import React from 'react';
import { Message } from '../../Api';
import Card from '../Card/Card';
import CardTitle from '../CardTitle/CardTitle';
import { CardRendererContainer } from './CardRenderer.style';

type CardRendererProps = {
  messages: Message[];
};

const CardRenderer: React.FC<CardRendererProps> = ({ messages }) => {
  const warningMessages = messages.filter(msg => msg.priority === 0);
  const infoMessages = messages.filter(msg => msg.priority === 1);
  const errorMessages = messages.filter(msg => msg.priority === 2);

  return (
    <CardRendererContainer>
      <div className="card-renderer-column">
        <CardTitle title="Error Type 1" length={errorMessages.length} />
        {errorMessages?.map?.(msg => <Card key={msg?.message} message={msg?.message} priority={msg?.priority} />)}
      </div>
      <div className="card-renderer-column">
        <CardTitle title="Warning Type 2" length={warningMessages.length} />
        {warningMessages?.map?.(msg => <Card key={msg?.message} message={msg?.message} priority={msg?.priority} />)}
      </div>
      <div className="card-renderer-column">
        <CardTitle title="Info Type 3" length={infoMessages.length} />
        {infoMessages?.map?.(msg => <Card key={msg?.message} message={msg?.message} priority={msg?.priority} />)}
      </div>
    </CardRendererContainer>
  );
};

export default CardRenderer;