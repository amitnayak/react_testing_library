// Hoist helper functions (but not vars) to reuse between test cases
const renderComponent = ({ theme, name }) =>
  render(
    <ThemeProvider theme={theme}>
      <HelloMessageStyled name={name} />
    </ThemeProvider>
  );

it('renders greeting', async () => {
  // Render new instance in every test to prevent leaking state
  const { getByText } = renderComponent({ theme: themeLight, name: 'Maggie' });

  await waitForElement(() => getByText(/hello Maggie/i));
});
