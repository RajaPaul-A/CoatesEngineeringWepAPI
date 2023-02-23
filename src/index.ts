var express = require('express')
var bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

import { userRoute } from './router/user.router';

app.use('/users',userRoute);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Cet web api listening at http://%s:%s", host, port)
})