let express = require('express');   // express 사용 선언
let server = express();             // express 실행
let path = require('path');

server.set('port', 80);             // port 설정

server.get('/', function (req, res) {
    // 요청 url('/')에 대하여 지정된 function 수행
    res.type('text/html');
    res.sendFile(path.join(__dirname, 'index.html'));
});
server.get('/json', function (req, res) {
    res.type('application/json');
    res.header("Access-Control-Allow-Origin", "*");
    res.sendFile(path.join(__dirname, 'student.json'));
});
server.listen(server.get('port'), function () {
    console.log('Server Started');  // 요청 대기, 메시지 출력
});