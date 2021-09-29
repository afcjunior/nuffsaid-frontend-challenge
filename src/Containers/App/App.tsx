import React, { useEffect } from 'react';
import toast, { ToastPosition } from 'react-hot-toast';
import { CardRenderer, MessageFlowControls, PageTitle } from '@Components';
import { Container, ToastContainer } from '@Containers/App/App.style';
import { Priority } from '../../types';
import { priorityColors } from '../../constants';
import { useSocket } from '../../Hooks/useSocket';

const App: React.FC<{}> = () => {
  const { messages } = useSocket();

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
      <MessageFlowControls />
      <CardRenderer messages={messages} />
    </Container>
  );
}

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

export default App;
