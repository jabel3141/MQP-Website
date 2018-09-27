var http = require('http'), 
qs   = require('querystring'), 
fs   = require('fs'), 
url  = require('url'), 
port = 8080


var server = http.createServer(function (req, res) {
  var uri = url.parse(req.url)

  switch( uri.pathname ) {
    case '/':
    sendFile(res, 'Index.html')
    break

    case '/ArcherTower.html':
    sendFile(res, 'ArcherTower.html')
    break

    case '/Arrow.html':
    sendFile(res, 'Arrow.html')
    break

    case '/BellTower.html':
    sendFile(res, 'BellTower.html')
    break

    case '/Bridge.html':
    sendFile(res, 'Bridge.html')
    break

    case '/Enemies.html':
    sendFile(res, 'Enemies.html')
    break

    case '/Gong.html':
    sendFile(res, 'Gong.html')
    break

    case '/Index.html':
    sendFile(res, 'Index.html')
    break

    case '/Kunai.html':
    sendFile(res, 'Kunai.html')
    break

    case '/KunaiTower.html':
    sendFile(res, 'KunaiTower.html')
    break

    case '/Ladder.html':
    sendFile(res, 'Ladder.html')
    break

    case '/Misc.html':
    sendFile(res, 'Misc.html')
    break

    case '/Oni.html':
    sendFile(res, 'Oni.html')
    break

    case '/PlayerTower.html':
    sendFile(res, 'PlayerTower.html')
    break

    case '/RockWall.html':
    sendFile(res, 'RockWall.html')
    break

    case '/Tori.html':
    sendFile(res, 'Tori.html')
    break

    case '/Towers.html':
    sendFile(res, 'Towers.html')
    break

    /////////////////////// Three.js files //////////////////////////////////

    case '/three.js-master/build/three.js':
    sendFile(res, 'three.js-master/build/three.js', 'text/javascript')
    break

    case '/three.js-master/examples/js/cameras/CinematicCamera.js':
    sendFile(res, 'three.js-master/examples/js/cameras/CinematicCamera.js', 'text/javascript')
    break

    case '/three.js-master/examples/js/controls/OrbitControls.js':
    sendFile(res, 'three.js-master/examples/js/controls/OrbitControls.js', 'text/javascript')
    break

    case '/three.js-master/examples/js/Detector.js':
    sendFile(res, 'three.js-master/examples/js/Detector.js', 'text/javascript')
    break

    case '/three.js-master/examples/js/libs/inflate.min.js':
    sendFile(res, 'three.js-master/examples/js/libs/inflate.min.js', 'text/javascript')
    break

    case '/three.js-master/examples/js/libs/stats.min.js':
    sendFile(res, 'three.js-master/examples/js/libs/stats.min.js', 'text/javascript')
    break

    case '/three.js-master/examples/js/loaders/FBXLoader.js':
    sendFile(res, 'three.js-master/examples/js/loaders/FBXLoader.js', 'text/javascript')
    break

    case '/three.js-master/examples/js/shaders/BokehShader2.js':
    sendFile(res, 'three.js-master/examples/js/shaders/BokehShader2.js', 'text/javascript')
    break

    /////////////////////// Animations //////////////////////////////////

    case '/ArcherTower.fbx':
    sendFile(res, 'models/ArcherTower.fbx', 'application/fbx')
    break

    case '/Arrow.fbx':
    sendFile(res, 'models/Arrow.fbx', 'application/fbx')
    break

    case '/BellTower.fbx':
    sendFile(res, 'models/BellTower.fbx', 'application/fbx')
    break

    case '/Bridge.fbx':
    sendFile(res, 'models/Bridge.fbx', 'application/fbx')
    break

    case '/Gong.fbx':
    sendFile(res, 'models/Gong.fbx', 'application/fbx')
    break

    case '/Kunai.fbx':
    sendFile(res, 'models/Kunai.fbx', 'application/fbx')
    break

    case '/KunaiTower.fbx':
    sendFile(res, 'models/KunaiTower.fbx', 'application/fbx')
    break

    case '/Ladder.fbx':
    sendFile(res, 'models/Ladder.fbx', 'application/fbx')
    break

    case '/Oni.fbx':
    sendFile(res, 'models/Oni.fbx', 'application/fbx')
    break

    case '/PlayerTower.fbx':
    sendFile(res, 'models/PlayerTower.fbx', 'application/fbx')
    break

    case '/RockWall.fbx':
    sendFile(res, 'models/RockWall.fbx', 'application/fbx')
    break

    case '/Tori.fbx':
    sendFile(res, 'models/Tori.fbx', 'application/fbx')
    break

    /////////////////////// IMAGES //////////////////////////////////

    case '/Enemy.jpg':
    sendFile(res, 'images/Enemy.jpg', 'image/jpg')
    break

    case '/Misc.jpg':
    sendFile(res, 'images/Misc.jpg', 'image/jpg')
    break

    case '/Tower.jpg':
    sendFile(res, 'images/Tower.jpg', 'image/jpg')
    break

    ////////////////////// OTHER ////////////////////////////////////

    case '/bootstrap.css':
    sendFile(res, 'bootstrap.css', 'text/css')
    break

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