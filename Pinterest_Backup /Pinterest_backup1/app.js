//CONNECT to FIREBASE

var app = angular.module("pintCloneApp", ["firebase"]); 

app.controller("postCtrl", function($scope, $firebase){
	var postRef = new Firebase('https://myhappyboard.firebaseio.com/'); 
	var sync = $firebase(postRef); 
	$scope.page = sync.$asArray(); //Make firebase data into an array
	 

//ADD OBJECT TO DATABASE

	$scope.addPost = function(w, x, y, z){
		

		$scope.page.$add({ image:w, title:x, category:y, userComment:z, comment:"", liked:"false" }); // firebase gives us the ability to use this $add function
		$scope.image = "";
		$scope.title = "";
		$scope.category = "";
		$scope.userComment = "";
	}


// DELETE OBJECT FROM DATABASE

	$scope.deletePost = function(post){ 
		var check = confirm("Are you sure you want to delete this post?");
		if(check == true){
			$scope.page.$remove(post);	
		}
	}
	




})