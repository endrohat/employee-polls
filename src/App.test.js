import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";

import { BrowserRouter as Router } from 'react-router-dom';


describe('APP', () => {
  
  it('matches the snapshot', () => {
    const store = createStore(reducer, middleware);
    var component = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it('will enable submit button when user selected', async () => {
    const store = createStore(reducer, middleware);
    var component = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    await waitFor(() => expect(screen.getByText('Mike Tsamis')).toBeInTheDocument());

    var input = component.getByTestId('user-select');
    fireEvent.change(input, { target: { value: 'sarahedo' } });
    var submitButton = component.getByTestId('submit-button');
    //fireEvent.click(submitButton);

    expect(submitButton).toBeEnabled();

  });


  it('will Redirect to home page when selecting user to login', async () => {
    const store = createStore(reducer, middleware);
    var component = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    await waitFor(() => expect(screen.getByText('Mike Tsamis')).toBeInTheDocument());

    var input = component.getByTestId('user-select');
    fireEvent.change(input, { target: { value: 'sarahedo' } });
    var submitButton = component.getByTestId('submit-button');
  
    fireEvent.click(submitButton);

    expect(screen.getByText('New Questions Section')).toBeInTheDocument()
  });

  it('will go back to login after logout', async () => {
    const store = createStore(reducer, middleware);
    var component = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    await waitFor(() => expect(screen.getByText('Mike Tsamis')).toBeInTheDocument());

    var input = component.getByTestId('user-select');
    fireEvent.change(input, { target: { value: 'sarahedo' } });
    var submitButton = component.getByTestId('submit-button');
  
    fireEvent.click(submitButton);
    var logout = screen.getByText('Logout');
    fireEvent.click(logout);

    expect(screen.getByText('Log In')).toBeInTheDocument()
  });

  it('will show new poll page after clicking new', async () => {
    const store = createStore(reducer, middleware);
    var component = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    await waitFor(() => expect(screen.getByText('Mike Tsamis')).toBeInTheDocument());

    var input = component.getByTestId('user-select');
    fireEvent.change(input, { target: { value: 'sarahedo' } });
    var submitButton = component.getByTestId('submit-button');
  
    fireEvent.click(submitButton);

    var newLink = screen.getByText('New')
    fireEvent.click(newLink);

    expect(screen.getByText('Would You Rather')).toBeInTheDocument()
  });


  it('will show Leaderboard page after clicking Leaderboard', async () => {
    const store = createStore(reducer, middleware);
    var component = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    await waitFor(() => expect(screen.getByText('Mike Tsamis')).toBeInTheDocument());

    var input = component.getByTestId('user-select');
    fireEvent.change(input, { target: { value: 'sarahedo' } });
    var submitButton = component.getByTestId('submit-button');
  
    fireEvent.click(submitButton);

    var leaderboardLink = screen.getByText('Leaderboard')
    fireEvent.click(leaderboardLink);

    expect(screen.getByText('Total Score')).toBeInTheDocument()
  });

});
