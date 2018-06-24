var express = require('express');
var app = express();

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || 'localhost' || '192.168.1.196';

app.use(express.static('./public/dist'));


app.get('/', function (req, res) {
  res.send('Hello! You have landed in the wrong places.');
});

app.listen(server_port, server_ip_address, function(){
    console.log("Server is ready to receive request at "+ server_port);
});

