const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const { Client } = require("pg");
require("dotenv").config();

const app = next({ dev });
const handle = app.getRequestHandler();

const getDatabaseConnection = () => {
    const databaseConnection = new Client({
	connectionString: process.env.DATABASE_CONNECTION_STRING
    });
    databaseConnection.connect();
    return databaseConnection;
}

app.prepare()
.then(() => {
    const server = express();
    server.use(express.static("public"));

    server.get("/:slug", async (req, res) => {
	const { slug } = req.params;
	try {
	    const databaseConnection = getDatabaseConnection();
	    const { rows } = await databaseConnection.query("SELECT url FROM urls WHERE id = $1", [slug]);
	    databaseConnection.end();

	    let redirectUrl = rows[0]
	    if (!redirectUrl.url.startsWith("http")) {
		redirectUrl.url = "http://" + redirectUrl.url;
	    }

	    res.redirect(redirectUrl.url);
	} catch (err) {
	    handle(req, res);
	}
    });

    server.get("*", (req, res) => {
	return handle(req, res);
    });

    const PORT = process.env.PORT || 2500;
    server.listen(PORT, (err) => {
	if (err) throw err;
	console.log(" > Server launched on http://localhost:" + PORT);
    });
})
.catch ((err) => {
    console.log(err.stack);
    process.exit(1);
});
