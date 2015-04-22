angular.module("mainModule", [])
	.controller("mainController", function ($scope, $http, jsonFilter)
	{
		$scope.setCount = function(hide, lc, rc, lc2, rc2, c1, c2, fc, last, last2)
		{
			hide = true;
			lc = false;
			rc = false;
			lc2 = false;
			rc2 = false;
			c1 = 5;
			c2 = 3;
			fc = 0;
			last = 0;
			last2 = 0;
		};
		
		$scope.leftCount = function (count, lastclicked, leftcounter)
		{
			count = count - 1;
			lastclicked = 1;
			leftcounter = true;
		};
		
		$scope.rightCount = function (count, lastclicked, rightcounter)
		{
			count = count + 1;
			lastclicked = 0;
			rightcounter = true;
		};
		
		$scope.getCount = function(count, lastclicked)
		{
			return count + lastclicked;
		};
		
		var logResult = function (str, data, status, headers)
		{
			return str + "\n\n" +
				"data: " + data + "\n\n" +
				"status: " + status + "\n\n" +
				"headers: " + jsonFilter(headers());
		};

		$scope.postCall = function (postData) {
			$scope.postData = postData;
			$http.post("server.php", {'postData': $scope.postData});
		};
	});