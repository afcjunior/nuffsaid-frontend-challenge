import React from 'react';
import { Message } from '../../types';
import { Card, CardTitle } from '@Components';
import { CardRendererContainer } from '@Components/CardRenderer/CardRenderer.style';
import { Priority } from '../../types';

type ColumnProps = {
  messages: Message[];
  title: string;
  priority: Priority;
};

const Column: React.FC<ColumnProps> = ({ messages, title, priority }) => {
  const prioritizedMessages = messages.filter(msg => msg.priority === priority);

  return (
    <div
      className={`card-renderer-column column-${priority}`}
    >
      <CardTitle title={title} length={prioritizedMessages.length} />
      {prioritizedMessages && prioritizedMessages.map?.(msg => (
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
        priority={Priority.Error}
      />
      <Column
        title="Warning Type 2"
        messages={messages}
        priority={Priority.Warn}
      />
      <Column
        title="Info Type 3"
        messages={messages}
        priority={Priority.Info}
      />
    </CardRendererContainer>
  );
};

export default CardRenderer;