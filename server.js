var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/client/static'))
require('./server/config/mongoose.js')
var routes = require('./server/config/routes.js');
routes(app);
app.listen(8000, function(){
    console.log('on 8000')
})