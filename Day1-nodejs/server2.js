const { application } = require('express');
const express= require('express')
const app = express()
const PORT = process.env.PORT || 3500;

//입력을 추가한 버전

app.get('/', (req, res)=>{
    console.log('root!')
    res.send('root!')
})

app.get('/api/person/', (req, res)=>{
    res.send('all person!')
})

app.get('/api/person/:name', (req, res)=>{
    const name=req.params.name
    res.send('person!:' + name)
})

app.get('/api/person/:name&:age', (req, res)=>{
    const name=req.params.name
    const age=req.params.age
    res.send('person!:' + name + age)
    console.log(req.params.name)
    console.log(req.params.age)
})

app.listen(PORT, ()=>{
    console.log(`Server On: http://localholst:${PORT}`)
})


//npm install express<<<집에 가면 다시 해볼 것
//ex
//car server
//car name / model name / price / etcetcetc 