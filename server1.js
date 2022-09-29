const fs = require('fs').promises;
const http = require('http');

//기본형

const server2 = http.createServer(async (req, res) => {

    try{
        const data = await fs.readFile('./server2.html');
        res.writeHead(200, {'Content-Type' : 'text/html; charset = utf-8'});
        res.end('data');

    }catch (err) {
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(err.message);
    }
})
server2.listen(8081);

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html; charset = utf-8'});
    res.write('<h1>Hello Node!!<h1>');
    res.end('<p>Hello Serverrr!</p>');

})
server.listen(8080); // 8080포트에서 listen

server.on('listening', ()=>{
    console.log('8080번 포트 대기중 lol');
});
server.on('error', (error)=>{
    console.log('errorrrr');
}); // 중괄호 끝에도 세미콜론 하나씩 붙이는 습관  