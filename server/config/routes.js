var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var Product = mongoose.model('Product');
var Order = mongoose.model('Order');

module.exports = function(app){
app.get('/show_customers', function(req, res){
    Customer.find({}, function(err, results){
        if(err)
            console.log('Error!')
        else
            res.json(results);
    })
})
app.post('/add_customer', function(req, res){
    var customer = new Customer({
        name: req.body.customer_info.name
    })
    customer.save(function(err){
        if(err)
        {   
            console.log('Error!', err.errors.name.properties.message)
            var error = err.errors.name.properties.message
            console.log(error)
            res.json({'error':error})
                    }
        else
            {console.log('Added!')
            res.redirect('/')}
    })
    
})
app.post('/remove_customer', function(req, res){
    Customer.remove({_id :req.body.customer}, function(err){
        res.redirect('/')
    })
})
app.get('/show_products', function(req, res){
    Product.find({}, function(err, results){
        if(err)
            console.log('Errorr!')
        else
            res.json(results)
    })
})
app.post('/add_product', function(req, res){
    console.log(req.body)
    var product = new Product({
        name: req.body.product_info.name,
        description: req.body.product_info.description,
        qty: req.body.product_info.qty
    })
    product.save(function(err){
        if(err)
            console.log('Error!')
        else
            console.log('Product Added!')
    })
    res.redirect('/')
})
app.get('/get_orders', function(req, res){
    Order.find({}, function(err, results){
        if(err)
            console.log('err')
        else
            res.json(results)
    })
})
app.post('/add_order', function(req, res){
    Product.findOne({_id: req.body.new_order.product._id}, function(err, results){
        console.log(results.qty);
        if(err)
            console.log('error');
        else if (results.qty < 1){
            console.log('under 0')
            res.json({error: 'no more'})
        }

        else{

        Product.update({_id: req.body.new_order.product._id},{$inc:{qty:-req.body.new_order.qty}}, function(err, results){
        if(err)
            console.log('error');
        else
            console.log('updated');
        })
        var order = new Order({
            name:req.body.new_order.name,
            qty:req.body.new_order.qty,
            product:req.body.new_order.product.name
        })
        order.save(function(err){
            if(err)
                console.log('error1')
            else
                console.log('order added')
        })
        res.redirect('/')
    }
})

    
})
app.get('/get5_products',function(req, res){
    console.log('hi')
    Product.find({})
    .sort({'qty':-1})
    .limit(5)
    .exec(function(err,results){
        if(err)
            console.log('limiterror')
        else
            console.log(results)
            res.json(results)
    })   
})
app.get('/get3_orders', function(req, res){
    Order.find({})
    .sort({'date':-1})
    .limit(3)
    .exec(function(err,results){
        if(err)
            console.log('error orders')
        else
            res.json(results)
    })
})
app.get('/get3_customers', function(req, res){
    Customer.find({})
    .sort({'created_date':-1})
    .limit(3)
    .exec(function(err, results){
        if(err)
            console.log('error @ customers')
        else
            res.json(results)
    })
})
}