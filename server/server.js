const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const DB_PASSWORD = process.env(DB_PASSWORD);

const pg = require("pg");
const pool = new pg.Pool({
  host: "db.bit.io",
  port: 5432,
  ssl: true,
  database: "lukegartner/tbd",
  user: "lukegartner",
  password: DB_PASSWORD,
});

app.use(express.static("server"));
app.use(express.json());

// Get
app.get("/ping", (req, res) => {
  res.send("ping back");
});

app.get("/messages", (req, res) => {
  let queryText = 'SELECT * FROM "messages";';

  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(PORT, () => {
  console.log("Listening on PORT", PORT);
});
