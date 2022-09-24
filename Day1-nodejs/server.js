
const { application } = require('express');
const express= require('express')
//express 모듈 소환
const app = express()
// express객체 생성해서 app에 할당 
const PORT = process.env.PORT || 4000;
//서버 포트번호 4000할당. 근데 진짜 이 한줄이면 끝? 쓰고있는 포트 번호가 아니면 OK
//점유중인 포트가 아니어야 함. well-know포트도 제외함

app.get('/', (req, res)=>{
    console.log('root!')
    res.send('root!')
})

app.get('/hello', (req, res)=>{
    console.log('hello world!')
})

app.get('/bye', (req,res)=>{
    res.send('bye!')
})

app.listen(PORT, ()=>{
    console.log(`Server On: http://localholst:${PORT}`)
})
//TCP의 추억을 들어봅시다 

//터미널에 node server.js
//브라우저에 http://localhost:4000 >> http://localhost:4000/hello 
//local host ip : 127.0.0.1 

//server.js파일 실행 - 서버 동작
//Ctrl+c : server stop

