
var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
	user:'root',
	password:'root',
	database:'demo'
});

connection.connect(function(err){
	if(err){
		console.log('连接错误：'+err.stack);
		return ;
		
	}
	console.log('connected as id '+connection.threadId);
});


function search(){

//查
connection.query('select * from users',function(err , rows , fileds){
	if(err){
		throw err;
	}
	console.log(typeof(rows));//Object
	console.log(rows.length);
	console.log(rows[0].name);
});



//删
connection.query('delete from users where name = "tt"',function(err,rows){
	if(err){
		throw err;
	}
	console.log(rows);
});
//改
connection.query('update users set name = "pengloo53" where name = "up"',function(err,rows){
	if(err){
		throw err;
	}
	console.log(rows);
});

}

var sqlSelet = "SELECT * FROM ?? WHERE ?? = ?";
var sqlInsert = 'insert into users (name ,password,email) values ("test" , "123456","tt@qq.com")';


function Users(){}
Users.prototype.set = function(name,password,email){
	this.name = name;
	this.password = password;
	this.email = email;
}


Users.prototype.sysout = function(){
	console.log("name:"+this.name+" password:"+this.password+" email:"+this.email);
}
var user = new Users();


user.set('AC','123456','qq@qq.com');
user.sysout();
user.set('AC2','123456','qq@qq.co2m');
user.sysout();



Users.prototype.del = function(){
	var query = 'SELECT * FROM ?? WHERE ?? = ?';
    var inserts = ['users', 'id', userId];
    query = mysql.format(sql, inserts);
}
//增
Users.prototype.insert = function(){
	var query;
    var inserts = ['users', 'id', userId];
    query = mysql.format(sql, inserts);
	connection.query('insert into users (name ,password,email) values ("test" , "123456","tt@qq.com")',function(err,rows){
		if(err){
			throw err;
		}
		console.log(rows);
	});
}
//改
Users.prototype.update = function(){
	var query;
    var inserts = ['users', 'id', userId];
    query = mysql.format(sql, inserts);
}

Users.prototype.nameExist = function(){
	var query;
    var inserts = ['users', 'id', userId];
    query = mysql.format(sql, inserts);
}

Users.prototype.get = function(){
	var query;
    var inserts = ['users', 'id', userId];
    query = mysql.format(sql, inserts);
}

//查-name
function hasNameYet(name){	
	connection.query('select * from users where name=?',[name],function(err, results, fields){
		if(err){
			throw err;
		}
		if(results.length>0){
			return true;
		}else{
			return false;
		}
	});
}
if(!hasNameYet("test")){
	console.log('name has in');
}else{
	console.log('name is not use');
}




connection.end();