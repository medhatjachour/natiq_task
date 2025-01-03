import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoadingIndicator from '../components/LoadingIndicator';

test('renders loading indicator when visible', () => {
  const { getByText } = render(<LoadingIndicator isVisible={true} />);
  expect(getByText('Loading...')).toBeInTheDocument();
});

test('does not render loading indicator when not visible', () => {
  const { queryByText } = render(<LoadingIndicator isVisible={false} />);
  expect(queryByText('Loading...')).not.toBeInTheDocument();
});
