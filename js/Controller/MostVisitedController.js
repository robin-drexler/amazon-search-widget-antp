function AmazonSuggestController($scope) {
    $scope.items = [];

    $scope.search = function(query) {
        if(!query.length) {
            $scope.items = [];
            return;
        }

        chrome.extension.sendMessage({purpose:"get", query: query}, function (items) {
            $scope.$apply(function () {
                $scope.items = items;
            });
        });
    };
}
