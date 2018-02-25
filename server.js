const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/blog/:_id", (req, res) => {
      const actualPage = "/blog/article";
      const queryParams = { _id: req.params._id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> next start at 3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
