// Requires \\
var express = require('express');
var bodyParser = require('body-parser');


// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

// Seville/Home to Canary Islands 

app.get('/', function(req, res){
 res.sendFile('/Users/student/projects/node.jsWeekSix/magellanVoyage/public/seville.html')
});

app.post('/submitform', function(req, res){
	console.log("I'm here!")
    res.redirect('/success')
})

app.get('/success', function(req, res){
    res.sendFile('/Users/student/projects/node.jsWeekSix/magellanVoyage/public/canaryIslands.html')
})

// Canary Islands to Cape Verde

app.post('/submitsecondform', function(req, res) {
	console.log("I'm at the second form")
	res.redirect('/secondsuccess')
})

app.get('/secondsuccess', function (req, res) {
	res.sendFile('/Users/student/projects/node.jsWeekSix/magellanVoyage/public/capeVerde.html')
})

// Cape Verde to Strait of Magellan

app.post('/submitthirdform', function(req, res) {
	console.log("I'm at the third form")
	res.redirect('/thirdsuccess')
})

app.get('/thirdsuccess', function (req, res) {
	res.sendFile('/Users/student/projects/node.jsWeekSix/magellanVoyage/public/straitOfMagellan.html')
})

// Strait of Magellan to Guam

app.post('/submitfourthform', function(req, res) {
	console.log("I'm at the fourth form")
	res.redirect('/fourthsuccess')
})

app.get('/fourthsuccess', function(req, res) {
	res.sendFile('/Users/student/projects/node.jsWeekSix/magellanVoyage/public/guam.html')
})

// Guam to the Philippines

app.post('/submitfifthform', function(req, res) {
	console.log("I'm at the last form")
	res.redirect('/fifthsuccess')
})

app.get('/fifthsuccess', function(req, res) {
	res.sendFile('/Users/student/projects/node.jsWeekSix/magellanVoyage/public/philippines.html')
})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
 console.log('Server running on port ' + port);
})