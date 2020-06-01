import React from 'react';
import { render, cleanup, waitFor, screen, fireEvent } from '@testing-library/react';
// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom/extend-expect'
import SubmitButton from '../jestcomponents/SubmitButton';

it('calls "onClick" prop on button click', () => {
 	// Render new instance in every test to prevent leaking state
  	const onClick = jest.fn();
  	const handleClick = jest.fn(e => e.preventDefault());
  	const { getByText, getByTestId } = render(<SubmitButton onClick={onClick} />);

  	// fireEvent.click(getByText(/Click me/i));
  	//expect(onClick).toHaveBeenCalled();

 	//fireEvent.click(getByText(/Click button/i));
  	//expect(handleClick).toHaveBeenCalled();
	fireEvent.click(getByTestId("btn"));

	//await waitFor(() => getByTestId("msg").toHaveTextContent(/button clicked/i));

  	expect(getByTestId("msg")).toHaveTextContent(/button clicked/i);
  	//fireEvent.click(getByTestId('msg'))

});
