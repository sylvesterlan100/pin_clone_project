//CONNECT to FIREBASE

var app = angular.module("pintCloneApp", ["firebase"]); 

app.controller("postCtrl", function($scope, $firebase, $filter){
	var postRef = new Firebase('https://myhappyboard.firebaseio.com/'); 
	var sync = $firebase(postRef); 
	$scope.page = sync.$asArray(); //Make firebase data into an array
	 

//ADD OBJECT TO DATABASE
	
	$scope.addPost = function(w, x, y, z, a){
		

		
			if(w===undefined||w===null)
				wedit="";
			else
				wedit=w;

			if(x===undefined||x===null)
				xedit="";
			else
				xedit=x;

			if(y===undefined||y===null||y==="")
				yedit="none";
			else
				yedit=y;

			if(z===undefined||z===null)
				zedit="";
			else
				zedit=z;
			
			
			if(a===undefined)
				aedit=[""];
			else if(a.indexOf(",")===-1)
			{
				aedit=a.split(" ");
			}
			else
			{
				aedit=a.split(", ");
			}

			if(zedit===""&&wedit==="")
			{
				alert("Please leave a comment or picture!");
				$("#myModal").modal('hide');
				$scope.image = "";
				$scope.title = "";
				$scope.category = "";
				$scope.userComment = "";
				$scope.tags=""


			}
			else
			{
				$scope.page.$add({ image:wedit, title:xedit, category:yedit, userComment:zedit, comment:"", liked:false, tags:aedit }); // firebase gives us the ability to use this $add function
				$scope.image = "";
				$scope.title = "";
				$scope.category = "";
				$scope.userComment = "";
				$scope.tags=""
				$("#myModal").modal('hide');

			}

	}


// DELETE OBJECT FROM DATABASE

	$scope.deletePost = function(post, index){ 
		
		$("#" + index).addClass("animated rubberBand");
		var check = confirm("Are you sure you want to delete this post?");
		if(check == true){
			
			$scope.page.$remove(post);	
		}
		else
		{
			// alert("They are so cute, aren't they?")
			
			$("#" + index).removeClass("animated rubberBand");

		}
		
		$("#" + index).removeClass("animated rubberBand");
	}
	
// TOGGLE LIKE BUTTON
	$scope.toggleLike=function(post){
	


		console.log($scope.page);
		post.liked=(!post.liked);
		$scope.page.$save(post);
	}

	
//MODAL POP UP
	$scope.setModalPicture = function(picture) {
			$scope.modalPicture = picture;
	}


})