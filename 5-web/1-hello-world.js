const http = require('http'); // return api of http module in to local variable

const requestListener = (req, res) => { 
  res.write('Hello World\n')
  res.end();
};


//createServer => higher order function (receive other function as an argument)
const server = http.createServer();

server.on('request', requestListener); //for every request

server.listen(4242, () => {
  console.log('Server is running...'); // if suscess, callback is working
});
