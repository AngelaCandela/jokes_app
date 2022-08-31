const repository = require('../repository/repositoryService');

const getAllJokes = () => {
  const results = repository.findAll('joke')
    .then((jokes) => jokes)
    .catch((error) => error);
  return results;
};

module.exports = {
  getAllJokes
};