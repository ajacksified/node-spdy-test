var spdy = require('spdy'),
    express = require('express'),
    fs = require('fs'),
    options, app, server;

options = {
  key: fs.readFileSync(__dirname + '/keys/spdy-key.pem'),
  cert: fs.readFileSync(__dirname + '/keys/spdy-cert.pem'),
  ca: fs.readFileSync(__dirname + '/keys/spdy-csr.pem')
};

app = express();

app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});

server = spdy.createServer(options, app);

server.listen(4000);
