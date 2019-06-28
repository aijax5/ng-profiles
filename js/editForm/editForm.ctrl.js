profiles.controller('editForm',['$scope', 'editProfile','$state', function ($scope,editProfile,$state) {
    $scope.profile=editProfile.getter();
    console.log(editProfile.getter())
    $scope.saveDetails=function () {
        editProfile.profilesList[editProfile.index]=$scope.profile;
        editProfile.writeBack();
        $state.go('home');
    }

    $scope.fileNameChanged = function (ele) {
        var files = ele.files;
        $scope.profile.img='./img/'+files[0].name;
      }    
     
}]);
