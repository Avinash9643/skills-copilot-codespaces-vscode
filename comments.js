// Create web server
// Create a server that will respond to a GET request with a JSON object.
// The JSON object will be an array of comments that you have in your program. 
// Each comment should be an object with the following properties: username, comment, timestamp.
// The username should be your name, the comment should be something about the class, and the timestamp should be the current time.
// The server should listen on port 3000.
// The JSON object should be returned as the response body.

const http = require('http');
const comments = [
    {
        username: "Luis",
        comment: "I'm loving this class!",
        timestamp: new Date()
    },
    {
        username: "Luis",
        comment: "This is so much fun!",
        timestamp: new Date()
    },
    {
        username: "Luis",
        comment: "I'm learning so much!",
        timestamp: new Date()
    }
];

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(comments));
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});