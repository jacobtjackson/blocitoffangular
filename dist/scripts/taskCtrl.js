(function() {
    function TaskCtrl($scope, $firebaseArray) {
        var ref = firebase.database().ref();
        $scope.tasklist = $firebaseArray(ref);
        
        $scope.addTask = function() {
            $scope.tasklist.$add({
                title: $scope.newTask
            });
        };
    }
    
angular
    .module('blocitoff')
    .controller('TaskCtrl', ['$scope', '$firebaseArray', TaskCtrl])
})();