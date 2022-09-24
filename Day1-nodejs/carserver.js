const { application } = require('express');
const express= require('express')
const app = express()
const PORT = process.env.PORT || 3000;

//car server
//car name / model name / price / etcetcetc 


app.get('/', (req, res)=>{
    console.log('root!')
    res.send('root!')
})

app.get('/api/car', (req, res)=>{
    console.log('car')
    res.send('car!')
})

app.get('/api/car/:name', (req, res)=>{
    console.log(req.params)
    console.log(req.params.name)
    const name=req.params.name
})

app.get('/api/car/:name&:modelNum&:price&:engine&:one', (req, res)=>{ 
    //빼서 어디 따로 만드는게...?
    console.log(req.params)
    console.log(req.params.name)
    console.log(req.params.modelNum)
    console.log(req.params.price)
    console.log(req.params.engine)
    console.log(req.params.one)

    const name=req.params.name
    const modelNum=req.params.modelNum
    const price=req.params.price
    const engine=req.params.engine
    const one=req.params.one

    
    res.send('Car Data!' + 'Car name?' + name + 
    'Model?' + modelNum + 'price?' + price + 'engine?' + engine + 
    'etc_one?' + one)
})

app.listen(PORT, ()=>{
    console.log(`Server On: http://localholst:${PORT}`)
})


