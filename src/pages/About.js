import Wrapper from '../components/ui/Wrapper';

const About = () => {
  return (
    <Wrapper>
      <div className="mt-12 md:mt-24 text-slate-600 dark:text-neutral-content">
        <h1 className="text-3xl font-bold mb-8">About</h1>
        <p>
          This simple joke generator was built in order to practice core React
          concepts. It is linked to the free REST API, JokeAPI. Feel free to
          check it out{' '}
          <a
            href="https://sv443.net/jokeapi/v2/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            here.
          </a>
        </p>
      </div>
    </Wrapper>
  );
};

export default About;
