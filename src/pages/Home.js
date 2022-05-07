import JokesResults from '../components/jokes/JokesResults';
import JokesSelect from '../components/jokes/JokesSelect';

import Wrapper from '../components/ui/Wrapper';

const Home = () => {
  return (
    <Wrapper>
      <main>
        <JokesSelect />
        <JokesResults />
      </main>
    </Wrapper>
  );
};

export default Home;
