angular.module("gogo")

.service('Global', function($http) {
    this.getSuggestion = function(val) {
        return $http.get('/api/suggest.php', {
            params: {
                query: val
            }
        }).then(function(response){
            return response.data.results.map(function(item){
                return item;
            });
        });
    }
});