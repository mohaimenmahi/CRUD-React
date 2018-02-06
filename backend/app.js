const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

let port = process.env.PORT || 4200;

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/students')
	.then(() => {
		console.log('Database Started');
	})
	.catch((err) => {
		console.log('App Starting error: ', err.stack);
		process.exit(1);
	});

const itemRouter = require('./routes/itemRouter');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/items', itemRouter);

// start the server
app.listen(port, () => console.log(`Server is up on port ${port}`));
