import { Fragment } from 'react';

import JokesResults from '../components/jokes/JokesResults';
import JokesSelect from '../components/jokes/JokesSelect';

const Home = () => {
  return (
    <Fragment>
      <JokesSelect />
      <JokesResults />
    </Fragment>
  );
};

export default Home;
