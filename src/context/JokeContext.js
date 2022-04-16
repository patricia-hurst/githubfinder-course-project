import { createContext, useReducer } from 'react';
import jokeReducer from './JokeReducer';

const JokeContext = createContext();

export const JokeProvider = props => {
  const initialState = {
    jokes: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(jokeReducer, initialState);

  //   initially setup fetch call using `https://v2.jokeapi.dev/joke/Programming`, prior to adding a <select> function
  //   to be able to select different categories of jokes

  // get jokes:
  const fetchJokes = async selected => {
    // set loading to true
    dispatch({ type: 'SET_LOADING' });

    // we get the <select> user selection to set joke category type
    // we get the endpoint of the URL path from selected as passed as fetchJokes argument
    const response = await fetch(`https://v2.jokeapi.dev/joke/${selected}`);

    if (!response.ok) {
      // on 404 redirect to not found page
      window.location = '/notfound';
    } else {
      const data = await response.json();

      dispatch({
        // note that loading is set back to false as part of the reducer
        type: 'GET_JOKES',
        payload: data,
      });
    }
  };

  return (
    <JokeContext.Provider
      value={{ jokes: state.jokes, loading: state.loading, fetchJokes }}
    >
      {props.children}
    </JokeContext.Provider>
  );
};

export default JokeContext;
