var app = angular.module('myApp', []);
app.controller('recipeCtrl', function($scope, $http) {
	$scope.loadRecipe = function(){
		var rSearch = document.getElementById("recipeSearch").value;
		$http.get("https://api.edamam.com/search?q=" + rSearch + "&app_id=f67928c1&app_key=f6c3d4090583042395891f6609a271a0")
		.then(function (response) {

			$scope.recipes = response.data.hits;
			console.log(response.data.hits);

		});
	}
});