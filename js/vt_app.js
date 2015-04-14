angular.module('vtApp', ['ngTouch', 'ng']);
var visionExam = angular.module('vtApp', ['ngTouch', 'ng']);
visionExam.controller('counts', ['$scope', function($scope){
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
    }
    $scope.leftCount = function (count, lastclicked, leftcounter)
    {
        count = count - 1;
        lastclicked = 1;
        leftcounter = true;
    }
    $scope.rightCount = function (count, lastclicked, rightcounter)
    {
        count = count + 1;
        lastclicked = 0;
        rightcounter = true;
    }
    $scope.getCount = function(count, lastclicked)
    {
        return count + lastclicked;
    }
}]);
