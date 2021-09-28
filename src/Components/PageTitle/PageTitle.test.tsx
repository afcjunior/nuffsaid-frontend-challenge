import { render } from '@testing-library/react';
import PageTitle from './PageTitle';

describe('<PageTitle /> Component', () => {
  it('Should render a title.', () => {
    const mockTitle = "title for unit test";
  
    const { getByText } = render((
      <PageTitle title={mockTitle} />
    ));

    expect(getByText(mockTitle)).toBeDefined();
  });
});
