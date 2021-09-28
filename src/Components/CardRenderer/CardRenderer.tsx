import React from 'react';
import { Message } from '../../Api';
import { Card, CardTitle } from '@Components';
import { CardRendererContainer } from '@Components/CardRenderer/CardRenderer.style';
import {
  ERROR_PRIORITY, WARNING_PRIORITY, INFO_PRIORITY
} from '../../constants';

type ColumnProps = {
  messages: Message[];
  title: string;
  priority: number;
};

const Column: React.FC<ColumnProps> = ({ messages, title, priority }) => {
  const prioritizedMessages = messages.filter(msg => msg.priority === priority);

  return (
    <div
      className={`card-renderer-column column-${priority}`}
    >
      <CardTitle title={title} length={prioritizedMessages.length} />
      {prioritizedMessages?.map?.(msg => (
        <Card
          key={msg?.message}
          message={msg?.message}
          priority={msg?.priority} 
        />
      ))}
    </div>
  )
};

type CardRendererProps = {
  messages: Message[];
};

const CardRenderer: React.FC<CardRendererProps> = ({ messages }) => {

  return (
    <CardRendererContainer>
      <Column
        title="Error Type 1"
        messages={messages}
        priority={ERROR_PRIORITY}
      />
      <Column
        title="Warning Type 2"
        messages={messages}
        priority={WARNING_PRIORITY}
      />
      <Column
        title="Info Type 3"
        messages={messages}
        priority={INFO_PRIORITY}
      />
    </CardRendererContainer>
  );
};

export default CardRenderer;