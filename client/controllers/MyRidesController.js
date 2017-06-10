
angular.module('myApp').controller('MyRidesController', function($scope, $http, $rootScope, $sessionStorage, $cookies) {
 var user = $cookies.getObject('authUser');
 var loggedInUser = user.currentUser.userInfo;
 $scope.Email = '';
 myride();


// $http.get('/bookcab/getbooking').success(function(response){
//   console.log(response);
// })
 function myride(){
   if(loggedInUser.usertype == 'Customer'){
     $scope.Email = loggedInUser.email;
     console.log($scope.Email);
     $http.get('/bookcab/getcust/' + $scope.Email).success(function(response){
        //console.log("cutomer booking ride "+response);
      $scope.datalist = response.docs;

     })
   }else {
     $scope.Email = loggedInUser.email;
     $http.get('/bookcab/getdriver/' + $scope.Email).success(function(response){
       //console.log("driver booking ride "+response);
       $scope.datalist = response.docs;

     })
   }
 }

})
