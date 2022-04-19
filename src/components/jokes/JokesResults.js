import { useContext } from 'react';
import JokeContext from '../../context/JokeContext';
import Spinner from '../ui/Spinner';
import Wrapper from '../ui/Wrapper';

const JokesResults = () => {
  const { jokes, loading } = useContext(JokeContext);

  // check that a joke has been fetched and isn't still loading
  if (jokes.type && !loading) {
    return (
      <Wrapper>
        <div className="card drop-shadow-lg bg-teal-600 text-center text-primary-content w-96">
          <div className="card-body">
            <h2 className="font-bold text-xl">
              {jokes.type === 'single' ? jokes.joke : jokes.setup}
            </h2>
            {jokes.type === 'twopart' ? <p>{jokes.delivery}</p> : null}
          </div>
        </div>
      </Wrapper>
    );
  } else if (loading) {
    return <Spinner />;
  }
};

export default JokesResults;
