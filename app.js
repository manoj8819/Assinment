//create a module myApp
var myApp = angular.module('myApp', ['ngRoute']);
 
//Now Configure  our  routing
myApp.config(function ($routeProvider, $locationProvider) {
    console.log("route");
    $routeProvider
    // set route for the home page
    .when('/home',
    {
        controller: 'HomeCtrl',
        templateUrl: 'home.html'
    })
 
     // set route for the about page
 
    .when('/about',{
        controller: 'AboutCtrl',
        templateUrl: 'about.html'
    })
 
   // set route for the contact page
 
    .when('/contact',{
        controller: 'ContactCtrl',
        templateUrl: 'contact.html'
    })
 
    // if not match with any route config then send to home page
 
     .otherwise({
        redirectTo: '/home'
      });
 
 
});
 
// create the controller and inject Angular's $scope
 
  // set for Home Controller
  myApp.controller('HomeCtrl', function($scope) {
    // create a message to display in our view
    $scope.message = "(',')---I am on Home page---(',')";
           $scope.student = [
    { id: 1, 'sname': 'Abhishek', 'email': 'Pabba', 'dob':'4-5-7','nationality': 'Indian','pname': 'Rajendra'}
   
  ];
  
  $scope.errorMessage = false;
  
  $scope.addRow = function () {
    var maxID = (Math.max.apply(null, $scope.student.map(x => x.id)) || 0) + 1;
    
    if(!!$scope.student.find(x => x.sname === $scope.selectedStudent.sname && x.nationality === $scope.selectedStudent.nationality)) {
      //alert('already eixsts');
      $scope.errorMessage = true;
      return;
    }
    $scope.student.push({'sname': $scope.selectedStudent.sname, 'email': $scope.selectedStudent.email, 'dob': $scope.selectedStudent.dob,'nationality': $scope.selectedStudent.nationality,'pname': $scope.selectedStudent.pname, id: maxID});
    $scope.selectedStudent.sname = '';
    $scope.selectedStudent.email = '';
    $scope.selectedStudent.dob = '';
    $scope.selectedStudent.nationality = '';
    $scope.selectedStudent.pname = '';
  }

  
  $scope.checkAll = function () {
    $scope.selectedAll = false;
    if(!$scope.selectedAll) { 
      $scope.selectedAll = true;
    } else { 
      $scope.selectedAll = false;
    }
    angular.forEach($scope.student, function(s){
      s.selected = $scope.selectedAll;
    });
  }
  $scope.singleStudentSelected = false;
  
  $scope.setSelectedStudent = function (employee){
    if($scope.student.filter(x => x.selected).length > 1){
      $scope.selectedStudent = null;
      $scope.singleStudentSelected = false;
    } else {
      $scope.selectedStudent = angular.copy($scope.student.find(x => x.selected));
      $scope.singleStudentSelected = !!$scope.selectedStudent;
    }
  }
  
  $scope.edit = function() {
    if(!!$scope.student.find(x => x.sname === $scope.selectedStudent.sname && x.nationality === $scope.selectedStudent.nationality)) {
      //alert('already eixsts');
      $scope.errorMessage = true;
      return;
    }
    var studentToEdit= $scope.student.find(x => x.id === $scope.selectedStudent.id);
    studentToEdit.sname = $scope.selectedStudent.sname;
    studentToEdit.email = $scope.selectedStudent.email;
    studentToEdit.dob = $scope.selectedStudent.dob;
    studentToEdit.nationality = $scope.selectedStudent.nationality;
    studentToEdit.pname = $scope.selectedStudent.pname;
  }

      
  });
 
// set for About Controller
  myApp.controller('AboutCtrl', function($scope) {
    $scope.message = "(',')---I am on About page---(',')";
  });
 
// set for Contact Controller
  myApp.controller('ContactCtrl', function($scope) {
    $scope.message = "(',')---I am on Contact page---(',')";
  });
