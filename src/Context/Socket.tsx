import React, { useState, useRef, useCallback, useEffect } from 'react'
import generateMessage from '../Api';
import { Message } from '../types';
import { createContext } from 'react';

export type SocketContextType = {
  messages: Message[];
  connected: boolean;
  connectToSocket: () => void;
  disconnectFromSocket: () => void;
  clearMessages: () => void;
  removeSpecificMessage: (message: string) => void;
}

export const SocketContext = createContext<SocketContextType>({
  messages: [],
  connected: false,
  connectToSocket: () => {},
  disconnectFromSocket: () => {},
  clearMessages: () => {},
  removeSpecificMessage: () => {}
});

export const SocketProvider: React.FC<{}> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [connected, setConnected] = useState(false);

  const socketRef = useRef(() => {});
  
  const connectToSocket = useCallback(() => {
    socketRef.current = generateMessage((message: Message) => {
      setMessages(oldMessages => [message, ...oldMessages]);
      setConnected(true);
    });

    return disconnectFromSocket;
  }, [setMessages])

  const disconnectFromSocket = () => {
    socketRef.current();
    setConnected(false);
  }

  useEffect(() => {
    const disconnect = connectToSocket();

    return disconnect;
  }, [connectToSocket]);

  const clearMessages = () => setMessages([])

  const removeSpecificMessage = (message: string) => {
    setMessages(oldMessages => {
      const restOfMessages = oldMessages.filter(msg => msg.message !== message)
      return restOfMessages;
    })
  }

  return (
    <SocketContext.Provider
      value={{
        messages,
        connected,
        connectToSocket,
        disconnectFromSocket,
        clearMessages,
        removeSpecificMessage
      }}
    >
      {children}
    </SocketContext.Provider>
  )
}

