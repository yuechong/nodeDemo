



function BaseDao(){}


/**

insertAryy:['表名'，'']
*/
BaseDao.prototype.insert = function(insertAryy){
	
	var sql = 'SELECT * FROM ?? WHERE ?? = ?';
	
    var inserts = ['users', 'id', userId];
}


/*

selectAryy:['表名','selectByWhat','value']
 // var select = ['users', 'id', userId];
*/
BaseDao.prototype.select = function(selectAryy){
	
	var sql = 'SELECT * FROM ?? WHERE ?? = ?';
	
  
	 
    query = mysql.format(sql, selectAryy);
	
}
