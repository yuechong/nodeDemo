



function BaseDao(){}


/**

insertAryy:['表名','表字段'，’值‘]
*/
BaseDao.prototype.insert = function(insertAryy){
	
	var sql = 'SELECT * FROM ?? WHERE ?? = ?';
	
    var inserts = ['users', 'id', userId];

    var sqlInsert = 'insert into users (name ,password,email) values ("test" , "123456","tt@qq.com")';
}


/*

selectAryy:['±íÃû','selectByWhat','value']
 // var select = ['users', 'id', userId];
*/
BaseDao.prototype.select = function(selectAryy){
	
	var sql = 'SELECT * FROM ?? WHERE ?? = ?';
	//var inserts = ['users', 'id', userId];
    var selectQuery = mysql.format(sql, selectAryy);

    return selectQuery;
    
}

exports.BaseDao = BaseDao;
