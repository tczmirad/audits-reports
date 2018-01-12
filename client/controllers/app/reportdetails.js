angular.module('app').controller('app_reportdetails', app_reportdetails);
function app_reportdetails($scope, app, page) {
    'use strict';
    app.init($scope);
    $scope.test = function(){
        console.log(page);
    }
  
}