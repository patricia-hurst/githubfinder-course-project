import Wrapper from '../components/ui/Wrapper';

// ========================
// Added text content
// Added Wrapper for layout (centering, margin and padding)
// h1 classes match JokesSelect.js h1 classes
// outer div classes for font color / dark mode font color
// ========================

const About = () => {
  return (
    <Wrapper>
      <div className="text-slate-600 dark:text-neutral-content">
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

// import { Fragment } from 'react';

// const About = () => {
//   return (
//     <Fragment>
//       <div className="container text-center py-8">
//         <h1 className="text-2xl mb-8">About</h1>
//         <p>
//           This simple joke generator was built in order to practice core React
//           concepts. It is linked to the free REST API, JokeAPI. Feel free to
//           check it out{' '}
//           <a
//             href="https://sv443.net/jokeapi/v2/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="link"
//           >
//             here.
//           </a>
//         </p>
//       </div>
//     </Fragment>
//   );
// };

// export default About;
