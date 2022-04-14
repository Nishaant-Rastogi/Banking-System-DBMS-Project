// db.js
import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }
});
export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}

// var mysql = require('mysql');
// dbConnectionInfo = {
//   host: process.env.MYSQL_HOST,
//   port: process.env.MYSQL_PORT,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   connectionLimit: 5,
//   database: process.env.MYSQL_DATABASE
// };
// var dbconnection = mysql.createPool(
//   dbConnectionInfo
// );

// dbconnection.on('connection', function (connection) {
//   console.log('DB Connection established');

//   connection.on('error', function (err) {
//     console.error(new Date(), 'MySQL error', err.code);
//   });
//   connection.on('close', function (err) {
//     console.error(new Date(), 'MySQL close', err);
//   });

// });


// module.exports = dbconnection;