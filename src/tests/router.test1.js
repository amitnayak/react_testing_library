// Hoist helper functions (but not vars) to reuse between test cases
const renderComponent = ({ userId }) =>
  render(
    <MemoryRouter initialEntries={[`/users/${userId}`]}>
      <Route path="/users/:userId">
        <UserWithRouter />
      </Route>
    </MemoryRouter>
  );

it('renders initial user id', async () => {
  // Render new instance in every test to prevent leaking state
  const { getByText } = renderComponent({ userId: 5 });

  await waitForElement(() => getByText(/user #5/i));
});

it('renders next user id', async () => {
  // Render new instance in every test to prevent leaking state
  const { getByText } = renderComponent({ userId: 5 });

  fireEvent.click(getByText(/next user/i));
  await waitForElement(() => getByText(/user #6/i));
});
