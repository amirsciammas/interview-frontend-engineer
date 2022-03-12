
import { screen, render, waitFor} from '@testing-library/react';
import App from './App';


  test('it should display the app waiting for loading the users', async() => {
      render(<App/>);
      const welcome = await screen.findByText('Welcome to My Interview for Frontend Engineer');
      expect(welcome).toBeTruthy();
      await waitFor(() => {
        expect(screen.queryByText("No users")).not.toBeInTheDocument();
      })
    });
