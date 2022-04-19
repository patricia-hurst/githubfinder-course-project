// get jokes:
export const fetchJokes = async selected => {
  const response = await fetch(`https://v2.jokeapi.dev/joke/${selected}`);

  if (!response.ok) {
    // on 404 redirect to not found page
    window.location = '/notfound';
  } else {
    const data = await response.json();

    return data;
  }
};
