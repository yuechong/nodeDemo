function Users(){}


Users.prototype.set = function(name,password,email){
	this.name = name;
	this.password = password;
	this.email = email;
}


Users.prototype.sysout = function(){
	console.log("name:"+this.name+" password:"+this.password+" email:"+this.email);
}

export.Users = Users;