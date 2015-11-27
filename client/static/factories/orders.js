  myApp.factory('ordersFactory', function($http){
        var factory = {};
        factory.getOrders = function(callback){
            $http.get('/get_orders').success(function(data){
                callback(data);
            })
        }
        factory.addOrder = function(info, callback){
            $http({
                url:'/add_order',
                method:'POST',
                data:{'new_order':info}
            })
            .then(function(response){
                console.log(response)
                callback()
            })
        }
        factory.getdashOrders = function(callback){
            $http.get('/get3_orders').success(function(data){
                callback(data);
            })
            
        }

        return factory
    })