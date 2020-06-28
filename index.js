const express = require("express");
const next = require("next");
const cors = require("cors");

const { nanoid } = require("nanoid");
const { Client } = require("pg");

require("dotenv").config();

const app = express();
app.use(cors());

const getDatabaseConnection = () => {
    const client = new Client({ connectionString: process.env.DATABASE_CONNECTION_STRING });
    client.connect();
    return client;
}

app.get("/urls", async (req, res) => {
    try {
	const database = getDatabaseConnection();
	const { rows } = database.query("SELECT url, id FROM urls");
	res.json({
	    message: "urls",
	    data: rows,
	});
    } catch (err) {
	res.json({
	    message: "error",
	    stack: err.stack,
	})
    }
});

app.get("create", async (req, res) => {
    const { slug, url } = req.body;
    if (slug == "") slug = nanoid(11);
    try {
	const database = getDatabaseConnection();
	const { rows } = await database.query("INSET INTO urls(id, url) VALUES($1, $2)", [slug, url]);
	res.json({
	    id: id,
	    url: url,
	    res: rows,
	});
    } catch (error) {
	res.json({
	    message: "error",
	    stack: error.stack,
	})
    }
});

