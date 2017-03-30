var express = require('express')
var app = express()

app.post('/', function(req, res) {
	console.log(req.body.hasOwnProperty('fasdf'));
	res.send('Hello World')
})

app.listen(3000)
