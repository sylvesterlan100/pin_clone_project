var requestApp=angular.module('RequestApplication',[])




function movieController($scope,$http){

	$http.get("http://www.w3schools.com/website/Customers_JSON.php")
	.success(function(response){console.log(response);$scope.names=response;});

}