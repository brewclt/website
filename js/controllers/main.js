module.exports = {
    name: 'MainController',
    func: function ($scope, $stateParams, $location, $anchorScroll, BreweryService) {
        $scope.articles = BreweryService.getArticle(); 
        $scope.monthly = BreweryService.getMonthly(); 
        $scope.scrollTo = function (id) {
            $location.hash(id);
            console.log($location.hash());
            $anchorScroll();
        };
    },
};