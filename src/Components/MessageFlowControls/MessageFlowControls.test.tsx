import { render, fireEvent } from '@testing-library/react';
import MessageFlowControls from './MessageFlowControls';


const mockConnected = true;
const mockConnectToSocket = jest.fn();
const mockDisconnectFromSocket = jest.fn();
const mockClearMessages = jest.fn();

jest.mock('../../Hooks/useSocket', () => ({
  useSocket: () => {
    return { 
      connected: mockConnected,
      connectToSocket: mockConnectToSocket,
      disconnectFromSocket: mockDisconnectFromSocket,
      clearMessages: mockClearMessages
    }
}}));

describe('<MessageFlowControls /> Component', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  })

  it('Should render.', () => {
    const { getByText } = render((
      <MessageFlowControls />
    ));

    expect(getByText('Clear')).toBeDefined();
  });


  it('Should allow the user to stop the connection.', () => {
    const { getByText } = render((
      <MessageFlowControls />
    ));

    const stopButton = getByText('Stop');
    fireEvent.click(stopButton);

    expect(mockDisconnectFromSocket).toHaveBeenCalled();
  });

  it('Should allow the user to clear.', () => {
    const { getByText } = render((
      <MessageFlowControls />
    ));

    const clearButton = getByText('Clear');
    fireEvent.click(clearButton);

    expect(mockClearMessages).toHaveBeenCalled();
  });
});
