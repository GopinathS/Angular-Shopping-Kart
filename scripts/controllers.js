function CategoryCtrl($scope,$http){


 $http.get('items/itemlist.json').success(function(data) {
 console.log("success");
    $scope.items = data;
	console.log(data);
  });

}