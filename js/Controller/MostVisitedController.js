function AmazonSuggestController($scope, $window) {
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

    $scope.searchKeyPress = function(item, event) {
        if(event.keyCode == 13) {
            $scope.go(item);
        }

    };

    $scope.go = function(item) {
        if(!item) {
            return;
        }
        $window.parent.location.href = "https://www.amazon.com/s/?tag=robdresblo-20&field-keywords=" + item;
    };
}
