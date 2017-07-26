module.exports = {
    name: 'MainController',
    func: function ($scope, $stateParams, $location, $anchorScroll) {

        $scope.scrollTo = function (id) {
            $location.hash(id);
            console.log($location.hash());
            $anchorScroll();
        };
    },
};