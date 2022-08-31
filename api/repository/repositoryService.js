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

const findOneById = (tableName, id) =>
  new Promise((resolve, reject) => {
    const sql = connection.format('SELECT * FROM ?? WHERE id = ?', [tableName, id]);

    connection.query(sql, (error, result) => {
      if (error) throw error;
      if (result.length > 0) {
        resolve(result[0]);
      } else {
        reject(`Couldn't find any jokes with id: ${id}`);
      }
    });
  });


module.exports = {
  findAll,
  findRandom,
  findOneById
};