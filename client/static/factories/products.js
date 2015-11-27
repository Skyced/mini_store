  myApp.factory('productsFactory', function($http){
        var factory = {};
        factory.getProducts = function(callback){
            $http.get('/show_products').success(function(data){
                callback(data)
            })
        }
        factory.addProduct = function(info, callback){
            $http({
                url:"/add_product",
                method:'POST',
                data: {"product_info": info}
            })
            .then(function(response){
                callback()
            })
        }
        factory.getdashProducts = function(callback){
            $http.get('/get5_products').success(function(data){
                console.log('dashfactory', data)
                callback(data);
            })
        }
        return factory
    })