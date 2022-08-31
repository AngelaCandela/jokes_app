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

module.exports = {
  findAll
};