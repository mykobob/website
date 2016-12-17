var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    // response.render('views/index');
    response.sendFile(__dirname + '/views/index.html');
});

app.get('/projects', function(req, res) {
    res.sendFile(__dirname + '/views/projects.html');
});

app.listen(app.get('port'), function() {
    console.log('Node app is runing on part', app.get('port'));
});
