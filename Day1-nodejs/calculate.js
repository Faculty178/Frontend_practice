const { application } = require('express');
const express= require('express')
const app = express()
const PORT = process.env.PORT || 3500;


app.get('/', (req, res)=>{
    console.log('root!')
    res.send('root!')
})

app.get('/api/add/:num1&:num2', (req,res)=>{
    console.log(req.params)
    console.log(req.params.num1)
    console.log(req.params.num2)

    const num1=req.params.num1
    const num2=req.params.num2
    sum = parseFloat(num1) + parseFloat(num2)

    res.send('덧셈결과' + sum)
})

app.get('/api/sub/:num1&:num2', (req,res)=>{
    console.log(req.params)
    console.log(req.params.num1)
    console.log(req.params.num2)
    const num1=req.params.num1
    const num2=req.params.num2
    sub = parseFloat(num1) - parseFloat(num2)

    res.send('뺄셈결과' + sub)
})

app.get('/api/mul/:num1&:num2', (req,res)=>{
    console.log(req.params)
    console.log(req.params.num1)
    console.log(req.params.num2)
    const num1=req.params.num1
    const num2=req.params.num2
    mul = parseFloat(num1) * parseFloat(num2)

    res.send('곱셈결과' + mul)
})

app.get('/api/div/:num1&:num2', (req,res)=>{
    console.log(req.params)
    console.log(req.params.num1)
    console.log(req.params.num2)
    const num1=req.params.num1
    const num2=req.params.num2
    div = parseFloat(num1) / parseFloat(num2)

    res.send('나눗셈결과' + div)
})


app.listen(PORT, ()=>{
    console.log(`Server On: http://localholst:${PORT}`)
})