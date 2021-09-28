import { Button } from '@material-ui/core';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import toast, { ToastPosition } from 'react-hot-toast';
import generateMessage, { Message } from '../../Api';
import { CardRenderer, PageTitle } from '@Components';
import { Container, ToastContainer } from '@Containers/App/App.style';
import { ContextType, MessagesContext } from '../../context';
import { ERROR_PRIORITY, ERROR_COLOR } from '../../constants';

const toastConfig = {
  duration: 2000,
  id: '2',
  position: 'top-right' as ToastPosition,
  style: {
    backgroundColor: ERROR_COLOR,
    color: '#000'
  },
  iconTheme: {
    primary: '#000',
    secondary: ERROR_COLOR,
  },
}

const App: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [connected, setConnected] = useState(false);
  const socketRef = useRef(() => {});
  
  const connectToSocket = useCallback(() => {
    socketRef.current = generateMessage((message: Message) => {
      setMessages(oldMessages => [message, ...oldMessages]);
      setConnected(true);

      if (message.priority === ERROR_PRIORITY) {
        toast.error(message.message, toastConfig);

        toast(
          (t) => (
            <ToastContainer
              onClick={() => toast.dismiss(t.id)}
            > 
              ❌ {message.message}
            </ToastContainer>
          ),
          toastConfig
        );
        
      }
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

  const defaultContext: ContextType = {
    removeSpecificMessage,
  }

  return (
    <Container>
      <PageTitle />
      <div className="button-container">
        <Button
          style={{
            backgroundColor: '#88FCA3',
            padding: '5px 20px',
            fontWeight: 'bold'
          }}
          size="small"
          variant="contained"
          onClick={connected ? disconnectFromSocket : connectToSocket}
        >
          {connected ? 'Stop' : 'Start'}
        </Button>
        <Button
          style={{
            backgroundColor: '#88FCA3',
            padding: '5px 20px',
            fontWeight: 'bold'
          }}
          size="small"
          variant="contained"
          onClick={clearMessages}
        >
          Clear
        </Button>
      </div>
      <MessagesContext.Provider value={defaultContext}>
        <CardRenderer messages={messages} />
      </MessagesContext.Provider>
    </Container>
  );
}

export default App;
