app.controller('NavCtr', ['$scope','$parse','$rootScope', function($scope,$parse,$rootScope){
			
	$scope.login = function () {
		console.log("jj");
		$rootScope.$broadcast('modal_EV');
	}
	$scope.navBar = {
		navList: [
			{text:'首页',href:''},
			{text:'xf',href:''}, 
			{text:'所示',href:''}
		],
		login:{
			fn:function(){
				alert("SD");
			}
		}
	};

}]);
app.controller('ConCtr', ['$scope', function($scope){


}]);
app.controller('FootCtr', ['$scope', function($scope){


}]);
