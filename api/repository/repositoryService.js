const connection = require('../../config/dbConnectionConfig');

const findAll = (tableName) =>
  new Promise((resolve, reject) => {
    const sql = connection.format('SELECT * FROM ??', [tableName]);

    connection.query(sql, (error, results) => {
      if (error) reject(error)
      else if (results.length > 0) resolve(results)
      else reject('Couldn\'t find any items')
    });
  });

const findRandom = (tableName) =>
  new Promise((resolve, reject) => {
    const sql = connection.format('SELECT * FROM ?? ORDER BY RAND() LIMIT 1', [tableName]);

    connection.query(sql, (error, result) => {
      if (error) reject(error)
      else resolve(result[0])
    });
  });


module.exports = {
  findAll,
  findRandom
};