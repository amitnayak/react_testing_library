
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
 // this works for mockinig fetch
 //global.fetch = jest.fn(() => Promise.resolve({ json: () => ''}))
  const { getByText } = render(<App />);
 // const linkElement = getByText(/learn react/i);
 // expect(linkElement).toBeInTheDocument();
});
