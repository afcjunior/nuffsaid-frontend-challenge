import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App /> Container', () => {
  it('Should render.', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText('nuffSaid.com Coding Challenge')).toBeDefined();
  });
});
