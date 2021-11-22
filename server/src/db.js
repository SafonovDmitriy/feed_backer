const sqlite3 = require("sqlite3");

const DBSOURCE = "./sqlite3.db";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  }
  console.log("Connected to the feedbacker database.");
});

module.exports = db;
