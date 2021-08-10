import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

test('renders root', async () => {
  axios.get.mockImplementation(() => {
    return {
      data: {
        id: 0,
        title: 'root',
        children: [],
      },
    };
  });

  render(<App />);
  const linkElement = screen.getByText(/root/i);

  await waitFor(() => {
    expect(linkElement).toBeInTheDocument();
  });
});
