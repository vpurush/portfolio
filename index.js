var express = require('express');
var app = express();

app.use(express.static('./public/dist'));

app.get('/', function (req, res) {
  res.send('Hello! You have landed in the wrong places.');
});

app.listen(3000, "localhost", function(){
    console.log("Server is ready to receive request at 3000");
});

