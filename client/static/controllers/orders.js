 myApp.controller('ordersController', function(ordersFactory, customerFactory, productsFactory){
        var that = this;
        this.orders = [];
        this.customers = [];
        this.products = [];
        showCustomers = function(){customerFactory.getCustomers(function(data){
            that.customers = data
            })
        }
        showCustomers();
        getallProducts = function(){
            productsFactory.getProducts(function(data){
                that.products=data
            })
        }
        getallProducts();
        getallOrders = function(){
            ordersFactory.getOrders(function(data){
                that.orders=data
                console.log(data);
            })
        }
        getallOrders();
        this.addOrder = function(){
            console.log(this.newOrder);
            ordersFactory.addOrder(this.newOrder, function(){
                getallOrders();
            })
            this.newOrder={};
        }
    })