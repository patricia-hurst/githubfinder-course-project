import { useState, useRef, useContext } from 'react';
import JokeContext from '../../context/JokeContext';
import { fetchJokes } from '../../context/JokesActions';
import Wrapper from '../ui/Wrapper';

// TODO: switch select dropdown to useRef as well (useState only for btnDisabled state)

const JokesSelect = () => {
  const [formData, setFormData] = useState({
    selected: '0',
    btnDisabled: true,
  });

  // useRef to insure that checkbox state is up to date for button disabling validations
  const checkboxRef = useRef();

  const { jokes, dispatch } = useContext(JokeContext);

  const handleSubmit = async e => {
    e.preventDefault();

    dispatch({ type: 'SET_LOADING' });

    let jokes;

    // change API url if safemode is checked:
    if (checkboxRef.current.checked) {
      jokes = await fetchJokes(`${formData.selected}?safe-mode`);
    } else {
      jokes = await fetchJokes(formData.selected);
    }

    dispatch({ type: 'GET_JOKES', payload: jokes });
  };

  const handleChange = e => {
    const { name, value, type } = e.target;

    const setForm = bool => {
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [name]: type === 'checkbox' ? checkboxRef : value,
          btnDisabled: bool,
        };
      });
    };

    // set btnDisabled to true if selected value is "0" (the default --) or if safe mode is on and dark jokes are selected:
    if (value === '0' || (value === 'Dark' && checkboxRef.current.checked)) {
      setForm(true);
    } else {
      setForm(false);
    }
  };

  return (
    <Wrapper>
      <h1 className="text-3xl font-bold mb-6">Joke Generator</h1>
      <form onSubmit={handleSubmit} className="text-center">
        <label
          htmlFor="selected"
          className="block text-center text-neutral-content text-xl font-bold mb-6"
        >
          Select a Category:
        </label>
        <div className="joke-select-row mb-6">
          <select
            name="selected"
            id="selected"
            onChange={handleChange}
            value={formData.selected}
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
          {jokes && (
            <button
              type="submit"
              className="btn btn-outline btn-accent"
              disabled={formData.btnDisabled}
            >
              Get Joke
            </button>
          )}
        </div>
        <div className="joke-safemode-row mb-16">
          <label htmlFor="safemodeChecked" className="text-lg italic mr-6">
            Safe Mode?
          </label>
          <input
            type="checkbox"
            id="safemodeChecked"
            name="safemodeChecked"
            ref={checkboxRef}
            onChange={handleChange}
          />
          <p className="w-96 mx-auto">
            Use safe mode to exclude all dark category jokes, as well as nsfw,
            explicit and other "unsafe" jokes.
          </p>
        </div>
      </form>
    </Wrapper>
  );
};

export default JokesSelect;
