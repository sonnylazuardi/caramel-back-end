var express        = require('express');
var app            = express();
var http           = require('http').Server(app);
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var fs             = require('fs');
var io             = require('socket.io')(http);

var db = require('./config/db');

var port = process.env.PORT || 3000;
mongoose.connect(db.url);

fs.readdirSync(__dirname + '/app/models').forEach(function (file) {
  if (~file.indexOf('.js')) require(__dirname + '/app/models/' + file);
});

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(port, function() {
  console.log('Magic happens on port ' + port);    
});
exports = module.exports = app;