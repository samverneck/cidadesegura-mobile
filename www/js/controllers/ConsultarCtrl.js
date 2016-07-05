angular.module("cidadesegura")
.controller("ConsultarCtrl",LoginCtrl);

function ConsultarCtrl($scope){
	$scope.img = "mapa-geral";

	$scope.trocarImg = function(){
		$scope.img = "map1"
	}

};