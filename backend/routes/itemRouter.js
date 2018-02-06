const express = require('express');
const app = express();
const Item = require('../models/Item');

app.get('/', (req, res) => {
	Item.find((err, itms) => {
		if(err) {
			console.log(err);
		} else {
			res.json(itms);
		}
	});
});

app.post('/add/post', (req, res) => {
	let item = new Item(req.body);
	item.save()
		.then(item => {
			res.json('Item Added');
		})
		.catch(err => {
			res.status(400).send('Unable to save database');
		});
});

app.get('/edit/:id', (req, res) => {
	let id = req.params.id;
	Item.findById(id, (err, item) => {
		res.json(item);
	});
});

app.post('/update/:id', (req, res) => {
	Item.findById(req.params.id, (err, item) => {
		if(!item) return next(new Error('Could not find the document'));
		else {
			item.item = req.body.item;

			item.save().then(item => {
				res.json('Update complete');
			})
			.catch(err => {
				res.status(400).send('Unable to update the database');
			});
		}
	});
});

app.get('/delete/:id', (req, res) => {
	Item.findByIdAndRemove({_id: req.params.id}, (err, item) => {
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = app;
