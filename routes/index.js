import express from 'express';
// import { pool } from '../db.js';
// const router = express.Router();
const app = express();

app.set('view engine', 'ejs');
app.set('views', '../views');
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('pra');
});

// "서버가 '/login' URL에서 요청을 받으면,
//'login'이라는 텍스트로 응답을 돌려보내라"는 의미

app.get('/login', (req, res) => {
	res.send('login');
});

app.get('/sound/:name', (req, res) => {
	//1
	const { name } = req.params;
	console.log(name);
	//2
	// const p = req.params;
	// console.log(p.name);
	res.send('야옹');
});

app.listen(5000, () => {
	console.log('server시작s');
});
