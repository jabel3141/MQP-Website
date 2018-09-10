var http = require('http')
, qs   = require('querystring')
, fs   = require('fs')
, url  = require('url')
, firebase = require("firebase")
, port = 8080


var server = http.createServer(function (req, res) {
  var uri = url.parse(req.url)
  // Note we no longer have an index.html file, but we handle the cases since that's what the browser will request
  // You'll need to modify the below to account for POSTs
  switch( uri.pathname ) {
    case '/':
    sendFile(res, 'Oni.html')
    break

    case '/three.js-master/build/three.js':
    sendFile(res, 'three.js-master/build/three.js', 'text/javascript')
    break

    case '/three.js-master/examples/js/libs/inflate.min.js':
    sendFile(res, 'three.js-master/examples/js/libs/inflate.min.js', 'text/javascript')
    break

    case '/three.js-master/examples/js/loaders/FBXLoader.js':
    sendFile(res, 'three.js-master/examples/js/loaders/FBXLoader.js', 'text/javascript')
    break

    case '/three.js-master/examples/js/controls/OrbitControls.js':
    sendFile(res, 'three.js-master/examples/js/controls/OrbitControls.js', 'text/javascript')
    break

    case '/three.js-master/examples/js/Detector.js':
    sendFile(res, 'three.js-master/examples/js/Detector.js', 'text/javascript')
    break

    case '/three.js-master/examples/js/libs/stats.min.js':
    sendFile(res, 'three.js-master/examples/js/libs/stats.min.js', 'text/javascript')
    break

    case '/three.js-master/examples/models/fbx/SambaDancing.fbx':
    sendFile(res, 'three.js-master/examples/models/fbx/SambaDancing.fbx', 'application/fbx')
    break

    case '/ONI_FBX.fbx':
    sendFile(res, 'ONI_FBX.fbx', 'application/fbx')
    break


    /////////////////////// END - IMAGES //////////////////////////////////
    default:
    res.end('404 not found')
  }
})

server.listen(process.env.PORT || port)
console.log('listening on 8080')



function sendFile(res, filename, contentType) {
  contentType = contentType || 'text/html';

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': contentType})
    res.end(content, 'utf-8')
  })

}