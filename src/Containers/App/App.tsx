import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import toast, { ToastPosition } from 'react-hot-toast';
import { CardRenderer, PageTitle } from '@Components';
import { Container, ToastContainer } from '@Containers/App/App.style';
import { Priority } from '../../types';
import { priorityColors } from '../../constants';
import { useSocket } from '../../Hooks/useSocket';

const toastConfig = {
  duration: 2000,
  id: `${Priority.Error}`,
  position: 'top-right' as ToastPosition,
  style: {
    backgroundColor: priorityColors[Priority.Error],
    color: '#000'
  },
  iconTheme: {
    primary: '#000',
    secondary: priorityColors[Priority.Error],
  },
}

const App: React.FC<{}> = () => {
  const {
    messages,
    connected,
    connectToSocket,
    disconnectFromSocket,
    clearMessages
  } = useSocket();

  useEffect(() => {
    const mostRecentMessage = messages?.[0]
    if (mostRecentMessage && mostRecentMessage.priority === Priority.Error) {
      toast.error(mostRecentMessage.message, toastConfig);

      toast(
        (t) => (
          <ToastContainer
            onClick={() => toast.dismiss(t.id)}
          >
            ❌ {mostRecentMessage.message}
          </ToastContainer>
        ),
        toastConfig
      );

    }
  }, [messages])

  return (
    <Container>
      <PageTitle />
      <div className="button-container">
        <Button
          style={{
            backgroundColor: priorityColors[Priority.Info],
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
            backgroundColor: priorityColors[Priority.Info],
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
      <CardRenderer messages={messages} />
    </Container>
  );
}

export default App;
