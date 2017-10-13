const express = require("express");
const r = require("rethinkdb");

const PORT = 8080;
const HOST = "0.0.0.0";

const app = new express();

app.use(express.static("public"));

app.listen(PORT, HOST);

console.log(`running on http://${HOST}:${PORT}`);

const rethinkConfig = {
  host: "rethinkdb",
  port: 28015,
  db: "test"
};

let connection = null;

r.connect(rethinkConfig)
  .then(conn => {
    console.log("connected to RethinkDB...");
    connection = conn;
  })
  .error(err => console.error(err));

  setInterval(async () => {
  if (!connection) {
    console.error("not connected to RethinkDB...");
    return;
  }
  
  try {
    let result = await r.table("info").run(connection);

    result.each((err, row) => {
      console.log(row);
    });
  } catch (err) {
    console.error(err);
  }
}, 5000);
