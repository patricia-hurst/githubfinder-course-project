import JokesResults from '../components/jokes/JokesResults';
import JokesSelect from '../components/jokes/JokesSelect';

// TODO: additional elements / styling?

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl text-teal-600 font-bold mb-16">Joke Generator</h2>
      <JokesSelect />
      <JokesResults />
    </div>
  );
};

export default Home;
