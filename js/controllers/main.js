module.exports = {
    name: 'MainController',
    func: function ($scope, $stateParams, BreweryService) {
        $scope.articles = BreweryService.getArticle(); 
        $scope.monthly = BreweryService.getMonthly(); 
    },
};