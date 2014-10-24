var pokeApp=angular.module('poke',[])


function pokeController ($scope, $filter){
	
	$scope.list=pokemonCharacters.profiles;
	
/*adds sort function for specific category*/
		

		$scope.addPoke = function(x, y, z, a, b, c){
			var bedit=b.split(" ");
			var cedit=c.split(" ");

			$scope.list.push({ name:y, image_url:x, category:z, abilities:a, type:bedit, weaknesses:cedit})
		
			$scope.pic="";
			$scope.name="";
			$scope.category="";
			$scope.abilities="";
			$scope.type="";
			$scope.weaknesses="";

		}


		$scope.deletePoke=function(pokeName){
			var check = confirm("Are You Sure You Want To Give The Lethal Injection To The Poor "
			+ $scope.list[pokeName].name);
			if(check==true){
			$scope.list.splice(pokeName, 1);
		} 
	};
			// $filter () is filtering 
			var orderBy = $filter('orderBy');
			 



			$scope.order = function(filtertype) {
      		
      		$scope.list = orderBy($scope.list, filtertype);

		}

		$scope.list2 = $scope.list;


    
    	$scope.$watch('pokefilter', function(val)
    	{ 
        $scope.list = $filter('filter')($scope.list2, val);
    	});





}
