/*//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
//Note, port must have inbound rule in firewall to work
const PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
 old */

var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080);