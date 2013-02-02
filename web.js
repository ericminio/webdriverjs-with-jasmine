var static = require('node-static');

var file = new(static.Server)('./public');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    });
}).listen(process.env.PORT || 5000);