import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import NatiqPage from '../NatiqPage';
import { callNatiq } from '../../api';

// Mock the API call
jest.mock('../../api');

test('renders NatiqPage and handles input and echo', async () => {
  (callNatiq as jest.Mock).mockResolvedValue({
    wave: 'dGVzdC13YXZlLWRhdGE=', // Mock base64 audio
  });
  
  // actually it'd be better to use id's 
  const { getByPlaceholderText, getByText, getByTestId } = render(<NatiqPage />);
  
  // Simulate entering text
  const input = getByPlaceholderText('Enter Arabic text');
  fireEvent.change(input, { target: { value: 'مرحبا' } });

  // Simulate clicking the Echo button
  const button = getByText('Echo');
  fireEvent.click(button);

  // Wait for the loading state
  await waitFor(() => getByText('Loading...'));
  
  // Wait for the audio to appear
  await waitFor(() => getByTestId('audio'));

  expect(callNatiq).toHaveBeenCalledWith('مرحبا مرحبا مرحبا');
  expect(getByTestId('audio')).toBeInTheDocument();
});
