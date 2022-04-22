import { useContext } from 'react';
import JokeContext from '../../context/JokeContext';
import Spinner from '../ui/Spinner';
import { motion, AnimatePresence } from 'framer-motion';

const JokesResults = () => {
  const { jokes, loading } = useContext(JokeContext);

  // check that a joke has been fetched and isn't still loading
  // layout determined by type of joke (single vs twopart)
  if (jokes.type && !loading) {
    return (
      <AnimatePresence>
        <motion.div
          key={jokes.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="text-slate-50 bg-teal-600 shadow-md shadow-slate-600 dark:shadow-sm dark:shadow-teal-500 rounded-xl">
            <div className="card-body">
              {jokes.type === 'single' && <h2>{jokes.joke}</h2>}
              {jokes.type === 'twopart' && (
                <>
                  <h2 className="font-bold text-xl">{jokes.setup}</h2>
                  <p>{jokes.delivery}</p>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  } else if (loading) {
    return <Spinner />;
  }
};

export default JokesResults;
