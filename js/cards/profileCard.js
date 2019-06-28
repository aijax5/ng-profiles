profiles.directive('profileCard', ['editProfile','$state',function (editProfile,$state) {
    return {
        scope: {
            profile: '=',
            index: '='
        },
        link: link,
        templateUrl: './js/cards/card.html',
        controller: profilesCtrl
    };

    function profilesCtrl($scope){
        $scope.testID = function(){
            console.log("testId called..."+ $scope.profile + "  >>>>   "+ $scope.index);
            editProfile.setter($scope.index);
            $state.go('edit');
        };
    }

    function link(scope) {

        // console.log(scope.profile);

    }
}]);