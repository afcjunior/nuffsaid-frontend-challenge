import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Priority } from '../../types';
import { priorityColors } from '../../constants';
import Card from './Card';

const mockMessage = {
  message: 'test message',
  priority: Priority.Warn
}
const mockRemoveSpecificMessage = jest.fn();

jest.mock('../../Hooks/useSocket', () => ({
  useSocket: () => {
    return { removeSpecificMessage: (message: string) => mockRemoveSpecificMessage(message) }
}}));

describe('<Card /> Component', () => {
  it('Should render a message.', () => {
    const { getByText } = render((
      <Card message={mockMessage.message} priority={mockMessage.priority} />
    ));

    expect(getByText(mockMessage.message)).toBeDefined();
  });

  it('Should render the background in the right color when priority is 0 (Error).', () => {
    const { getByTestId } = render((
      <Card message={mockMessage.message} priority={Priority.Error} />
    ));

    expect(getByTestId('card')).toHaveStyle(`background-color: ${priorityColors[Priority.Error]}`);
  });

  it('Should render the background in the right color when priority is 1 (Warning).', () => {
    const { getByTestId } = render((
      <Card message={mockMessage.message} priority={Priority.Warn} />
    ));

    expect(getByTestId('card')).toHaveStyle(`background-color: ${priorityColors[Priority.Warn]}`);
  });

  it('Should render the background in the right color when priority is 2 (Info).', () => {
    const { getByTestId } = render((
      <Card message={mockMessage.message} priority={Priority.Info} />
    ));

    expect(getByTestId('card')).toHaveStyle(`background-color: ${priorityColors[Priority.Info]}`);
  });

  it('Should allow the user to clear.', () => {
    const { getByText } = render((
      <Card message={mockMessage.message} priority={mockMessage.priority} />
    ));

    const clearButton = getByText('Clear');
    fireEvent.click(clearButton);

    expect(mockRemoveSpecificMessage).toHaveBeenCalled();
  });
});
