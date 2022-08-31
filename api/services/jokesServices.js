const repository = require('../repository/repositoryService');

const getAllJokes = () => {
  const results = repository.findAll('joke')
    .then((jokes) => jokes)
    .catch((error) => error);
  return results;
};

const getRandomJoke = () => {
  const result = repository.findRandom('joke')
    .then((joke) => joke)
    .catch((error) => error);
  return result;
};

const getJokeById = (id) => {
  const result = repository.findOneById('joke', id)
    .then((joke) => joke)
    .catch((error) => console.log(`Error: ${error}`));
  return result;
};

module.exports = {
  getAllJokes,
  getRandomJoke,
  getJokeById
};