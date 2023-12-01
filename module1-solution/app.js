(function() {
    'use strict';
    
    angular.module('LunchCheck', [])
    
    .controller('LunchCheckController', function($scope){
        $scope.listString = "";
        $scope.list = [];

        $scope.displayList = function(){
            $scope.list = $scope.listString.split(",");
            


            $scope.list.forEach(function(item,index){
                if(item == ""){
                    $scope.list.pop(index);
                }
            });

document.getElementById("demo").innerHTML = text;
 
function myFunction(item, index) {
  text += index + ": " + item + "<br>"; 
}




            



        };
    })
    
    .controller('MsgController', MsgController);
    
    MsgController.$inject = ['$scope'];
    function MsgController($scope){
        $scope.message = "";
        $scope.check = function(){
            if($scope.list.length == 0){
                $scope.message = "Please enter data first";
            } else if($scope.list.length <= 3){
                $scope.message = "Enjoy!";
            } else{
                $scope.message = "Too much!";
            }
        }
    }
    
    })();