 myApp.controller('customerController', function(customerFactory){
        var that = this;
        this.customers = [];
        this.errors;
        showCustomers = function(){customerFactory.getCustomers(function(data){
            that.customers = data
            })
        }
        showCustomers();
        this.addCustomer = function(){
            console.log(this.newCustomer)
            customerFactory.addCustomer(this.newCustomer, function(err){
                console.log(err)
                that.errors = err
                showCustomers();
            })
            this.newCustomer = {};
        }
        this.removeCustomer = function(info){
            customerFactory.removeCustomer(info, function(){
                showCustomers();
            })
        }
    })