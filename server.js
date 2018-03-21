const express = require("express");
const next = require("next");

const app = next({ dev: process.env.NODE_ENV });
const handle = app.getRequestHandler();

app
	.prepare()
	.then(() => {
		const server = express();

		server.get("/blog/:_id", (req, res) => {
			const queryParams = { _id: req.params._id };
			app.render(req, res, "/blog/article", queryParams);
		});

		server.get("*", (req, res) => {
			return handle(req, res);
		});

		server.listen(8000, err => {
			if (err) {throw err;}
			console.log("> next start at 8000");
		});
	})
	.catch(ex => {
		console.error(ex.stack);
		process.exit(1);
	});
