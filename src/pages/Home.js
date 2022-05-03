import JokesResults from '../components/jokes/JokesResults';
import JokesSelect from '../components/jokes/JokesSelect';

import Wrapper from '../components/ui/Wrapper';

const Home = () => {
  return (
    <main className="flex-grow h-auto">
      <Wrapper>
        <JokesSelect />
        <JokesResults />
      </Wrapper>
    </main>
  );
};

export default Home;
