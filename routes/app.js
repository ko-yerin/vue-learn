import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', '../views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('prac');
});

app.post('/board', (req, res) => {
	const title = req.body.title;

	const des = req.body.description;

	fs.writeFile('data/' + title, des, function (err) {
		if (err) {
			console.log('err', err);
			res.status(500).send('server err');
		} else {
			res.send('hi post' + title + des);
		}
	});
});

app.listen(4444, () => {
	console.log('server 시작');
});
