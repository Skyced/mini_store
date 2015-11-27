myApp.controller('productsController', function(productsFactory){
        var that = this
        this.products = [];

        getallProducts = function(){
            productsFactory.getProducts(function(data){
                console.log(data)
                that.products=data
            })
        }
        getallProducts()
       
        this.addProduct = function(){
            productsFactory.addProduct(this.newProduct, function(){
                getallProducts()
            })
            this.newProduct
        }
    })