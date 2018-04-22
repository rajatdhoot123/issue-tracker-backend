const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const ticket = require('./api/routes/ticket')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	}
	next();
})

app.use('/ticket', ticket)

app.get('/', (req, res) => res.send("Page server from /"))

module.exports = app;
