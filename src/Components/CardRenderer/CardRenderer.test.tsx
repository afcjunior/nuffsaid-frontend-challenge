import React from 'react';
import { render } from '@testing-library/react';
import { Priority } from '../../types';
import CardRenderer from './CardRenderer';

describe('<CardRenderer /> Component', () => {
  it('Should render.', () => {
    const { getByText } = render((
      <CardRenderer messages={[]} />
    ));

    expect(getByText('Error Type 1')).toBeDefined();
    expect(getByText('Warning Type 2')).toBeDefined();
    expect(getByText('Info Type 3')).toBeDefined();

  });

  it('Should show correct amount of cards in each columns', () => {
    const { getByText } = render((
      <CardRenderer messages={mockMessages} />
    ));

    const totalErrorMessages = mockMessages.filter(msg => msg.priority === Priority.Error).length
    const totalWarningMessages = mockMessages.filter(msg => msg.priority === Priority.Warn).length
    const totalInfoMessages = mockMessages.filter(msg => msg.priority === Priority.Info).length

    expect(getByText(`Count ${totalErrorMessages}`)).toBeDefined();
    expect(getByText(`Count ${totalWarningMessages}`)).toBeDefined();
    expect(getByText(`Count ${totalInfoMessages}`)).toBeDefined();
  });

  it('Should render info priority cards under the info column.', () => {
    const infoMessages = mockMessages.filter(msg => msg.priority === Priority.Info);

    const { getByText } = render((
      <CardRenderer messages={mockMessages} />
    ));

    const specificInfoCard = getByText(infoMessages[0]?.message);
    const infoCardParentColumn = specificInfoCard?.parentElement?.parentElement

    expect(infoCardParentColumn?.className).toContain(`column-${Priority.Info}`);
  });

  it('Should render warning priority cards under the warning column.', () => {
    const warnMessages = mockMessages.filter(msg => msg.priority === Priority.Warn);

    const { getByText } = render((
      <CardRenderer messages={mockMessages} />
    ));

    const specificCard = getByText(warnMessages[0]?.message);
    const warnCardParentColumn = specificCard?.parentElement?.parentElement

    expect(warnCardParentColumn?.className).toContain(`column-${Priority.Warn}`);
  });

  it('Should render error priority cards under the error column.', () => {
    const errorMessages = mockMessages.filter(msg => msg.priority === Priority.Error);

    const { getByText } = render((
      <CardRenderer messages={mockMessages} />
    ));

    const specificCard = getByText(errorMessages[0]?.message);
    const errorCardParentColumn = specificCard?.parentElement?.parentElement

    expect(errorCardParentColumn?.className).toContain(`column-${Priority.Error}`);
  });
});

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