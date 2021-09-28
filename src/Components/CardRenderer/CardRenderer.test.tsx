import React from 'react';
import { render } from '@testing-library/react';
import { MessagesContext } from '../../context';
import CardRenderer from './CardRenderer';
import { INFO_PRIORITY, WARNING_PRIORITY, ERROR_PRIORITY } from '../../constants';

const mockMessages = [
  {
      "message": "Adipisci totam cumque maxime ea soluta.",
      "priority": 0
  },
  {
      "message": "Non tempora in aut dolores impedit a unde nemo.",
      "priority": 1
  },
  {
      "message": "Delectus officiis consequatur harum.",
      "priority": 1
  },
  {
      "message": "In voluptatem in debitis.",
      "priority": 2
  },
  {
      "message": "Quia est corrupti repellat voluptas.",
      "priority": 2
  },
  {
      "message": "Vel molestias totam pariatur quod.",
      "priority": 0
  },
  {
      "message": "Voluptate et ut id a.",
      "priority": 2
  },
  {
      "message": "Maiores et exercitationem asperiores cupiditate.",
      "priority": 2
  },
  {
      "message": "Et labore illo omnis quibusdam voluptate neque blanditiis.",
      "priority": 1
  },
  {
      "message": "Id dolorum dolor est maiores.",
      "priority": 1
  },
  {
      "message": "Nisi rerum unde repellat.",
      "priority": 2
  },
  {
      "message": "Nisi aut et et.",
      "priority": 0
  },
  {
      "message": "Repudiandae placeat aut quidem distinctio sunt beatae.",
      "priority": 2
  },
  {
      "message": "Aut blanditiis ipsam officiis sed dolores sit.",
      "priority": 2
  },
  {
      "message": "Esse vel quisquam qui odit ipsam saepe.",
      "priority": 2
  },
  {
      "message": "Explicabo dolores hic consequatur ipsa.",
      "priority": 2
  },
]

describe('<CardRenderer /> Component', () => {
  it('Should render.', () => {
    const mockContext = {
      removeSpecificMessage: () => jest.fn()
    }

    const { getByText } = render((
    <MessagesContext.Provider value={mockContext}>
      <CardRenderer messages={[]} />
    </MessagesContext.Provider>
    ));

    expect(getByText('Error Type 1')).toBeDefined();
    expect(getByText('Warning Type 2')).toBeDefined();
    expect(getByText('Info Type 3')).toBeDefined();

  });

  it('Should show correct amount of cards in each columns', () => {
    const mockContext = {
      removeSpecificMessage: () => jest.fn()
    }

    const { getByText } = render((
    <MessagesContext.Provider value={mockContext}>
      <CardRenderer messages={mockMessages} />
    </MessagesContext.Provider>
    ));

    const totalInfoMessages = mockMessages.filter(msg => msg.priority === INFO_PRIORITY).length
    const totalWarningMessages = mockMessages.filter(msg => msg.priority === WARNING_PRIORITY).length
    const totalErrorMessages = mockMessages.filter(msg => msg.priority === ERROR_PRIORITY).length

    expect(getByText(`Count ${totalInfoMessages}`)).toBeDefined();
    expect(getByText(`Count ${totalWarningMessages}`)).toBeDefined();
    expect(getByText(`Count ${totalErrorMessages}`)).toBeDefined();
  });

  it('Should render info priority cards under the info column.', () => {
    const mockContext = {
      removeSpecificMessage: () => jest.fn()
    }

    const infoMessages = mockMessages.filter(msg => msg.priority === INFO_PRIORITY);

    const { getByText } = render((
    <MessagesContext.Provider value={mockContext}>
      <CardRenderer messages={mockMessages} />
    </MessagesContext.Provider>
    ));

    const specificInfoCard = getByText(infoMessages[0]?.message);
    const infoCardParentColumn = specificInfoCard?.parentElement?.parentElement

    expect(infoCardParentColumn?.className).toContain(`column-${INFO_PRIORITY}`);
  });

  it('Should render warning priority cards under the warning column.', () => {
    const mockContext = {
      removeSpecificMessage: () => jest.fn()
    }

    const warnMessages = mockMessages.filter(msg => msg.priority === WARNING_PRIORITY);

    const { getByText } = render((
    <MessagesContext.Provider value={mockContext}>
      <CardRenderer messages={mockMessages} />
    </MessagesContext.Provider>
    ));

    const specificCard = getByText(warnMessages[0]?.message);
    const warnCardParentColumn = specificCard?.parentElement?.parentElement

    expect(warnCardParentColumn?.className).toContain(`column-${WARNING_PRIORITY}`);
  });

  it('Should render error priority cards under the error column.', () => {
    const mockContext = {
      removeSpecificMessage: () => jest.fn()
    }

    const errorMessages = mockMessages.filter(msg => msg.priority === ERROR_PRIORITY);

    const { getByText } = render((
    <MessagesContext.Provider value={mockContext}>
      <CardRenderer messages={mockMessages} />
    </MessagesContext.Provider>
    ));

    const specificCard = getByText(errorMessages[0]?.message);
    const errorCardParentColumn = specificCard?.parentElement?.parentElement

    expect(errorCardParentColumn?.className).toContain(`column-${ERROR_PRIORITY}`);
  });
});
