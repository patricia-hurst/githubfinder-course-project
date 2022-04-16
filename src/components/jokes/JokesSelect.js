import { useState, useContext } from 'react';
import JokeContext from '../../context/JokeContext';

// this was previously all in the <Home> component
// moved it out for a cleaner <Home> component and to segregate the <select> component

const JokesSelect = () => {
  const [selected, setSelected] = useState('0');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const { fetchJokes } = useContext(JokeContext);

  const handleSelectChange = e => {
    if (e.target.value === '0') {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }

    setSelected(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (selected === '0') {
      return;
    } else {
      fetchJokes(selected);
    }
  };

  return (
    <div className="flex items-center mb-8">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="select"
          className="block text-center text-neutral-content text-xl font-bold mb-6"
        >
          Select a Category:
        </label>
        <select
          name="select"
          onChange={handleSelectChange}
          value={selected}
          className="px-2 py-2 border-solid border-2 border-transparent rounded focus:text-gray-700 focus:border-teal-500 focus:outline-none hover:border-teal-500 mr-6"
        >
          <option value="0">--</option>
          <option value="Dark">Dark</option>
          <option value="Spooky">Spooky</option>
          <option value="Pun">Pun</option>
          <option value="Christmas">Christmas</option>
          <option value="Programming">Programming</option>
          <option value="Misc">Misc</option>
        </select>
        <button
          type="submit"
          className="btn btn-outline btn-accent"
          disabled={btnDisabled}
        >
          Get Joke
        </button>
      </form>
      {/* prior to adding select, just had a standalone button for testing */}
      {/* <button onClick={fetchJokes} className="btn btn-outline btn-accent">
          Get Joke
        </button> */}
    </div>
  );
};

export default JokesSelect;
