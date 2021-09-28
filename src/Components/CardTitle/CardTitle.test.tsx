import { render } from '@testing-library/react';
import CardTitle from './CardTitle';

describe('<CardTitle /> Component', () => {
  it('Should render a title.', () => {
    const mockTitle = "title for unit test";
  
    const { getByText } = render((
      <CardTitle title={mockTitle} length={0} />
    ));

    expect(getByText(mockTitle)).toBeDefined();
  });

  it('Should render a length.', () => {
    const mockTitle = "title for unit test";
    const mockArrayLength = 8;
  
    const { getByText } = render((
      <CardTitle title={mockTitle} length={mockArrayLength} />
    ));

    expect(getByText(`Count ${mockArrayLength}`)).toBeDefined();
  });

});
