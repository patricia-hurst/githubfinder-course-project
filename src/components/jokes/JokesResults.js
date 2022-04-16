import { useContext } from 'react';
import JokeContext from '../../context/JokeContext';
import Spinner from '../ui/Spinner';

const JokesResults = () => {
  const { jokes, loading } = useContext(JokeContext);

  // used for initial testing purposes:
  //   useEffect(() => {
  //     fetchJokes();
  //   }, []);

  // TODO: needs additional styling
  const twopartJokeHtml = (
    <div className="card drop-shadow-lg bg-teal-600 text-center text-primary-content w-96">
      <div className="card-body">
        <h2 className="card-title">{jokes.setup}</h2>
        <p>{jokes.delivery}</p>
      </div>
    </div>
  );

  const singleJokeHtml = (
    <div className="card drop-shadow-lg bg-teal-600 text-center text-primary-content w-96">
      <div className="card-body">
        <h2 className="card-title">{jokes.joke}</h2>
      </div>
    </div>
  );

  if (!loading && jokes.type === 'twopart') {
    return twopartJokeHtml;
  }

  if (!loading && jokes.type === 'single') {
    return singleJokeHtml;
  }

  if (loading) return <Spinner />;
};

export default JokesResults;
