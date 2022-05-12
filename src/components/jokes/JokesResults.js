import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import JokeContext from '../../context/JokeContext';
import Spinner from '../ui/Spinner';
import { AiOutlineArrowRight } from 'react-icons/ai';

const JokesResults = () => {
  const { jokes, loading } = useContext(JokeContext);

  const jokesHtml = (
    <div className="joke-card bg-transparent p-4 h-80 w-96 text-center">
      {/* joke-card-inner-single from conditional makes sure that the hover effect for card flip animation isn't triggered for single part jokes */}
      <div
        className={`${
          jokes.type === 'twopart'
            ? 'joke-card-inner'
            : 'joke-card-inner-single'
        } relative w-full h-full transition-transform duration-500 text-slate-50 bg-teal-600 shadow-md shadow-slate-600 dark:shadow-sm dark:shadow-teal-500 rounded-xl`}
      >
        <div className="joke-card-front px-4 w-full h-full absolute flex flex-col justify-center">
          <h2 className="text-xl">
            {jokes.type === 'twopart' ? jokes.setup : jokes.joke}
          </h2>
          {jokes.type === 'twopart' && (
            <AiOutlineArrowRight className="text-2xl absolute bottom-3 right-3 " />
          )}
        </div>
        {jokes.type === 'twopart' && (
          <div className="joke-card-back px-4 w-full h-full absolute flex flex-col justify-center">
            <h2 className="text-xl">{jokes.delivery}</h2>
          </div>
        )}
      </div>
    </div>
  );

  if (jokes.type && !loading) {
    return (
      <AnimatePresence>
        <motion.div
          key={jokes.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {jokesHtml}
        </motion.div>
      </AnimatePresence>
    );
  } else if (loading) {
    return <Spinner />;
  }
};

export default JokesResults;
