var requestApp=angular.module('RequestApplication',[])




function discountController($scope,$http){

	$http.get("http://app.petdiscounts.com/admin/api/latest_deals?start_index=1&items_per_page=10")
	.success(function(response){

		

		for(var i=0; i<response.latestDeals.length;i++)
		{	
			response.latestDeals[i].category_marker=response.latestDeals[i].category_marker.replace("upload\/markers\/","http:\/\/app.petdiscounts.com\/admin\/upload/markers\/");
			response.latestDeals[i].image=response.latestDeals[i].image.replace("upload\/images\/", "http:\/\/app.petdiscounts.com\/admin\/upload\/images\/");
		}
		$scope.names=response;});

	

}