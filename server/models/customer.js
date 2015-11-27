var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var validate = require('mongoose-validator');

var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
  }),
  validate({
    validator: 'isAlphanumeric',
    passIfEmpty: true,
    message: 'Name should contain alpha-numeric characters only'
  })
];


var CustomerSchema = new mongoose.Schema({
    name: {type:String, required:true, validate: nameValidator},
    created_date: {type: Date, default: new Date}
})
var Customer = mongoose.model('Customer', CustomerSchema);

var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var OrderSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    product: String,
    date: {type: Date, default: new Date}
})
var Order = mongoose.model('Order', OrderSchema)

var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var ProductSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: String,
    qty: Number
})
var Product = mongoose.model('Product', ProductSchema);