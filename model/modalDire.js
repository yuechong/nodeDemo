app.directive('modal', ['$http','$rootScope','$timeout', function($http,$rootScope,$timeout){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		restrict: 'E',
		scope: {},
		replace: true,
		templateUrl: 'model/modal.html',
		link: function($scope, iElm, iAttrs, controller) {
			console.log($rootScope);
			var removeEvent =  $rootScope.$on('modal_EV',function(){
				console.log("gbo");
				//$(iElm).addClass('in').css({'display':'block'});
				$(iElm).modal('show');
			});
			//$timeout(function(){removeEvent();},1000)
			$scope.$on('$destroy',function(){
				console.log("directive destory");
				removeEvent();
			});
		}
	};
}]);