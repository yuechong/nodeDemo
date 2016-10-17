var mysql = require('mysql');

var db = {};

db.config = {
    host:'localhost',
	user:'root',
	password:'root',
	database:'demo'
};

var con =  mysql.createConnection(db.config);


