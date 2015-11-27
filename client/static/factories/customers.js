myApp.factory('customerFactory', function($http){
        var factory = {};
        factory.getCustomers = function(callback){
            $http.get('/show_customers').success(function(data){
                callback(data);
            })
        }
        factory.addCustomer = function(info, callback){
            console.log(info)
            $http({
                url:'/add_customer',
                method:'POST',
                data:{'customer_info':info}
            }).then(function(response){
                console.log(response)
                console.log(response.data.error)
                if(response.data.error){
                    callback(response.data.error);
                }
                else
                    callback()
            })

        }
        factory.removeCustomer = function(info, callback){
            $http({
                url:'/remove_customer',
                method:'POST',
                data:{"customer":info}
            })
            .then(function(response){
                callback()
            })
        }
        factory.getdashCustomers = function(callback){
            $http.get('/get3_customers').success(function(data){
                callback(data);
            })
        }
        return factory
    })