
var mysql = require('mysql');

var con = mysql.createConnection({
    host:'localhost',
	user:'root',
	password:'root',
	database:'demo'
});

con.connect(function(err){
	if(err){
		console.log('Á¬½Ó´íÎó£º'+err.stack);
		return ;
		
	}
	console.log('connected as id '+connection.threadId);
});
con.end();

