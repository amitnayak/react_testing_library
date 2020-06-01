import React from 'react'
import { render, cleanup, waitFor, screen } from '@testing-library/react';
import HelloMessage from '../jestcomponents/HelloMessage'


afterEach(cleanup);



it('renders personalized greeting', async () => {
	// Render new instance in every test to prevent leaking state
	const { getByText } = render(<HelloMessage name="amit"/>);

	await waitFor(() => getByText(/hello amit/i));
});

