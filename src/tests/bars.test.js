import { render, screen } from '@testing-library/react';

import {
  ContentBar
} from '../components';

test('test rendering content in breadcrumb', () => {
  render(<ContentBar />);
  const linkElement = screen.getAllByText(/Solicitação/i);
  expect(linkElement).toHaveLength;
});
