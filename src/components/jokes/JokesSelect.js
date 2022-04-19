import { useState, useContext } from 'react';
import JokeContext from '../../context/JokeContext';
import { fetchJokes } from '../../context/JokesActions';
import Wrapper from '../ui/Wrapper';

const JokesSelect = () => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [formData, setFormData] = useState({
    selected: 'Misc',
    safemodeChecked: false,
  });

  const { jokes, dispatch } = useContext(JokeContext);

  const handleSubmit = async e => {
    e.preventDefault();

    dispatch({ type: 'SET_LOADING' });

    const jokes = await fetchJokes(formData.safemodeChecked ? `${formData.selected}?safe-mode` : formData.selected);

    dispatch({ type: 'GET_JOKES', payload: jokes });
  };

  const handleChange = e => {
    const selection = e.target.value;

    console.log(selection);

    setFormData(prevFormData => ({
      ...prevFormData,
      selected: selection,
    }))

    if (formData.safemodeChecked && selection === "Dark") {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  };

  const handleCheckbox = e => {
    console.log(e.target.checked);
    const isOn = e.target.checked;

    setFormData(prevFormData => ({
      ...prevFormData,
      safemodeChecked: isOn,
    }))

    if(isOn && formData.selected === "Dark") {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false)
    }
  }

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
              disabled={btnDisabled}
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
            checked={formData.safemodeChecked}
            onChange={handleCheckbox}
          />
          <p className="w-96 mx-auto">
            Use safe mode to exclude all dark category jokes, as well as nsfw,
            explicit and other "unsafe" jokes from all categories.
          </p>
        </div>
      </form>
    </Wrapper>
  );
};

export default JokesSelect;
