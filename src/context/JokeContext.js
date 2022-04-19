import { createContext, useReducer } from 'react';
import jokeReducer from './JokeReducer';

const JokeContext = createContext();

export const JokeProvider = props => {
  const initialState = {
    jokes: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(jokeReducer, initialState);

  return (
    <JokeContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </JokeContext.Provider>
  );
};

export default JokeContext;
