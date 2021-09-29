import React from 'react'
import { useSocket } from '../../Hooks/useSocket';
import { StyledButton } from './MessageFlowControls.style';

export default function MessageFlowControls() {
  const {
    connected,
    connectToSocket,
    disconnectFromSocket,
    clearMessages
  } = useSocket();

  return (
    <div className="button-container">
      <StyledButton
        size="small"
        variant="contained"
        onClick={connected ? disconnectFromSocket : connectToSocket}
      >
        {connected ? 'Stop' : 'Start'}
      </StyledButton>
      <StyledButton
        size="small"
        variant="contained"
        onClick={clearMessages}
      >
        Clear
      </StyledButton>
    </div>
  )
}
