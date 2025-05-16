import {render} from '@testing-library/react';
import '@testing-library/jest-dom'
import Index  from '@/app/page';

test('renders index page', () => {
  const { getByText } = render(<Index />);
  const helloWorldElement = getByText('Hello, world!');

  expect(helloWorldElement).toBeInTheDocument();
});