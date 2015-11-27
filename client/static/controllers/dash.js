 myApp.controller('dashController', function(productsFactory, ordersFactory, customerFactory){
        var that = this;
        this.customers = [];
        this.orders = [];
        this.products = [];
        var get5Products = function(){
            productsFactory.getdashProducts(function(data){
                console.log(data)
                that.products=data
            })
        }
        get5Products();
        var get3Orders = function(){
            ordersFactory.getdashOrders(function(data){
                that.orders=data
                console.log(data)
            })
        }
        get3Orders();
        var get3Customers = function(){
            customerFactory.getdashCustomers(function(data){
                that.customers = data
            })
        }
        get3Customers();
    })