import mysql from 'mysql2';

const pool = mysql.createPool({
	host: '192.168.75.66',
	user: 'rhdpfls12',
	password: 'rhdpfls12',
	database: 'BattlePractice',
});

pool.getConnection((err, connection) => {
	connection.query('select*from entry', (err, result) => {
		if (!err) {
			console.log(result);
			connection.release();
		} else {
			throw err;
		}
	});
});
