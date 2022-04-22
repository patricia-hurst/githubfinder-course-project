import JokesResults from '../components/jokes/JokesResults';
import JokesSelect from '../components/jokes/JokesSelect';

import Wrapper from '../components/ui/Wrapper';

const Home = () => {
  return (
    <main className="mt-12 px-2 grow overflow-hidden">
      <Wrapper>
        <JokesSelect />
        <JokesResults />
      </Wrapper>
    </main>
  );
};

export default Home;
