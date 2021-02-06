const express = require('express');
const next = require('next');
const routes = require('../routes');
const bodyParser = require('body-parser');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

const knex = require('knex')({
	client: 'sqlite3',
	connection: {
		filename: path.resolve(__dirname, './jobs.db')
	},
	useNullAsDefault: true
});

app
	.prepare()
	.then(() => {
		const server = express();
		server.use(bodyParser.json());

		server.get('/api/postings', async (req, res) => {
			const postings = await knex('Posting');
			res.send(postings);
		});

		server.get('*', (req, res) => {
			return handle(req, res);
		});

		const PORT = process.env.PORT || 3000;
		server.use(handle).listen(PORT, (err) => {
			if (err) throw err;
			console.log('READY ON PORT:', PORT);
		});
	})
	.catch((ex) => {
		console.error(ex.stack)
		process.exit(1)
	});
