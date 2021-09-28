import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MessagesContext } from '../../context';
import { ERROR_COLOR, WARNING_COLOR, INFO_COLOR } from '../../constants';
import Card from './Card';

const mockMessage = {
  message: 'test message',
  priority: 2
}

describe('<Card /> Component', () => {
  it('Should render a message.', () => {
    const mockContext = {
      removeSpecificMessage: () => jest.fn()
    }

    const { getByText } = render((
    <MessagesContext.Provider value={mockContext}>
      <Card message={mockMessage.message} priority={mockMessage.priority} />
    </MessagesContext.Provider>
    ));

    expect(getByText(mockMessage.message)).toBeDefined();
  });

  it(`Should render the background in ${WARNING_COLOR} when priority is 0 (Warning).`, () => {
    const mockContext = {
      removeSpecificMessage: jest.fn()
    }

    const { getByTestId } = render((
    <MessagesContext.Provider value={mockContext}>
      <Card message={mockMessage.message} priority={0} />
    </MessagesContext.Provider>
    ));

    expect(getByTestId('card')).toHaveStyle(`background-color: ${WARNING_COLOR}`);
  });

  it(`Should render the background in ${INFO_COLOR} when priority is 1 (Info).`, () => {
    const mockContext = {
      removeSpecificMessage: jest.fn()
    }

    const { getByTestId } = render((
    <MessagesContext.Provider value={mockContext}>
      <Card message={mockMessage.message} priority={1} />
    </MessagesContext.Provider>
    ));

    expect(getByTestId('card')).toHaveStyle(`background-color: ${INFO_COLOR}`);
  });

  it(`Should render the background in ${ERROR_COLOR} when priority is 2 (Error).`, () => {
    const mockContext = {
      removeSpecificMessage: jest.fn()
    }

    const { getByTestId } = render((
    <MessagesContext.Provider value={mockContext}>
      <Card message={mockMessage.message} priority={mockMessage.priority} />
    </MessagesContext.Provider>
    ));

    expect(getByTestId('card')).toHaveStyle(`background-color: ${ERROR_COLOR}`);
  });

  it('Should allow the user to clear.', () => {
    const mockContext = {
      removeSpecificMessage: jest.fn()
    }

    const { getByText } = render((
    <MessagesContext.Provider value={mockContext}>
      <Card message={mockMessage.message} priority={mockMessage.priority} />
    </MessagesContext.Provider>
    ));

    const clearButton = getByText('Clear');
    fireEvent.click(clearButton);

    expect(mockContext.removeSpecificMessage).toHaveBeenCalled();
  });
});
